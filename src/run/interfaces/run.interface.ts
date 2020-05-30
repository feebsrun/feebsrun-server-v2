import { Document } from 'mongoose';

export interface Run extends Document {
  readonly distance: number;
  readonly time: number;
  readonly date: Date;
  readonly isRace: boolean;
}