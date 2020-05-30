import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RecipeDto } from './dto';
import { RecipeService } from './recipes.service';
import { Recipe } from './interfaces';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @Post()
  create(@Body() recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipeService.create(recipeDto);
  }

  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.find(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipeService.update(id, recipeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.delete(id);
  }
}