import { Schema } from 'mongoose';

export const recipeSchema = new Schema({
  ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient'}], // TODO: lookup how to handle relationships
  steps: [{ type: String }],
  equipmentNeeded: [{ type: String }]
});