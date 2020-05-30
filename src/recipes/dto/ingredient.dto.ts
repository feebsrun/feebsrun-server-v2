import { MeasurementType, MeasurementUnit } from "../interfaces";

export class IngredientDto {
  readonly name: string;
  readonly prepWork?: string[];
  readonly measurementType: MeasurementType;
  readonly measurementUnit: MeasurementUnit;
  readonly measurementValue: number;
}