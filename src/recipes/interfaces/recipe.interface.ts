import { Document } from "mongoose";
import { Ingredient } from "./ingredient.interface";

export interface Recipe extends Document {
  readonly ingredients: Ingredient[] | string[];
  readonly steps: string[];
  readonly equipmentNeeded?: string[];
}