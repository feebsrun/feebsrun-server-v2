import { Connection } from 'mongoose';
import { ingredientSchema, recipeSchema } from './schemas'

export const recipeProviders = [{
  provide: 'INGREDIENT_MODEL',
  useFactory: (connection: Connection) => connection.model('Ingredient', ingredientSchema),
  inject: ['DATABASE_CONNECTION']
}, {
  provide: 'RECIPE_MODEL',
  useFactory: (connection: Connection) => connection.model('Recipe', recipeSchema),
  inject: ['DATABASE_CONNECTION']
}];