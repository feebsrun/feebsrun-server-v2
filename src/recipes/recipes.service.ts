import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RecipeDto, IngredientDto } from './dto';
import { Recipe, Ingredient } from './interfaces';

@Injectable()
export class RecipeService {
  constructor(
    @Inject('RECIPE_MODEL') private readonly recipeModel: Model<Recipe>,
    @Inject('INGREDIENT_MODEL') private readonly ingredientModel: Model<Ingredient>) { }

  async create(recipeDto: RecipeDto): Promise<Recipe> {
    const { ingredients, ...recipeWithoutIngredients } = recipeDto;
    const ingredientModels = ingredients.map((ingredientDto: IngredientDto) => {
      return new this.ingredientModel(ingredientDto);
    });

    const ingredientIds = ingredientModels.map((ing) => ing._id);
    const createdRecipe = new this.recipeModel({
      ...recipeWithoutIngredients,
      ingredients: ingredientIds
    });

    ingredientModels.forEach((ing) => ing._recipe = createdRecipe._id)

    // Save ingredients first
    await this.ingredientModel.create(ingredientModels);
    
    // Then save recipe
    const addedRecipe = await createdRecipe.save();
    const results = await addedRecipe.populate('ingredients').execPopulate();

    return results;
  }

  findAll(): Promise<Recipe[]> {
    return this.recipeModel
      .find()
      .populate('ingredients')
      .exec();
  }

  find(id: string): Promise<Recipe> {
    return this.recipeModel
    .findById(id)
    .populate('ingredients')
    .exec();
  }

  async update(id: string, recipeDto: RecipeDto): Promise<Recipe> {
    const existingRecipe = await this.recipeModel.findById(id).exec();

    if (!existingRecipe) {
      throw new Error(`Recipe: ${id} does not exist!`);
    }
    
    // Remove existing ingredients to avoid orphaned data
    await this.ingredientModel.deleteMany({ _recipe: id }).exec();

    const { ingredients, ...recipeWithoutIngredients } = recipeDto;
    const ingredientModels = ingredients.map((ingredientDto: IngredientDto) => {
      return new this.ingredientModel({
        ...ingredientDto,
        _recipe: id
      });
    });

    const ingredientIds = ingredientModels.map((ing) => ing._id);
    const recipeToUpdate = {
      ...recipeWithoutIngredients,
      ingredients: ingredientIds
    }

    // Save ingredients first
    await this.ingredientModel.create(ingredientModels);
    
    // Then save recipe
    await this.recipeModel.updateOne({ _id: id }, recipeToUpdate).exec();

    const updatedRecipe = await this.recipeModel.findById(id).populate('ingredients').exec();

    return updatedRecipe;
  }

  async delete(id: string): Promise<Recipe> {
    const existingRecipe = await this.recipeModel.findById(id).exec();
    
    // Remove existing ingredients to avoid orphaned data
    const ingredientsToBeRemoved = existingRecipe.ingredients;
    await this.ingredientModel.deleteMany({ _id: { $in: ingredientsToBeRemoved }}).exec();

    return existingRecipe.remove();
  }
}