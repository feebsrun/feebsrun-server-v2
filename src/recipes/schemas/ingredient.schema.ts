import { Schema } from 'mongoose';

export const ingredientSchema = new Schema({
  name: { type: String, required: true },
  prepWork: [{ type: String }],
  measurementType: { type: String, required: true },
  measurementUnit: { type: String, required: true },
  measurementValue: { type: String, required: true },
  _recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' }
});