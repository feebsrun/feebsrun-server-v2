import { Module } from '@nestjs/common';
import { RecipeController } from './recipes.controller';
import { RecipeService } from './recipes.service';
import { recipeProviders } from './recipes.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RecipeController],
  providers: [RecipeService, ...recipeProviders]
})
export class RecipeModule { }