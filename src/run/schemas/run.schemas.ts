import { Schema } from 'mongoose';

export const RunSchema = new Schema({
  distance: { type: Number, required: true },
  time: { type: Number, required: true },
  date: { type: Date, required: true },
  isRace: { type: Boolean, required: true}
});