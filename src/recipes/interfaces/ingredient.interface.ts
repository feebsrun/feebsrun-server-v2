import { Document } from "mongoose";
import { Recipe } from "./recipe.interface";

export interface Ingredient extends Document {
  readonly name: string;
  readonly prepWork?: string[];
  readonly measurementType: MeasurementType;
  readonly measurementUnit: MeasurementUnit;
  readonly measurementValue: number;

  // parent recipe
  _recipe?: Recipe | string;
}

export enum MeasurementType {
  Volume,
  Weight,
  Count,
}

export enum MeasurementUnit {
  tsp,
  tbsp,
  cup,
  floz,
}