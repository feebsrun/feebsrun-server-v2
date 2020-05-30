import { IngredientDto } from "./ingredient.dto";

export class RecipeDto {
  readonly ingredients: IngredientDto[];
  readonly steps: string[];
  readonly equipmentNeeded?: string[];
}