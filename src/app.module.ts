import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { RunModule } from './run/run.module';
import { RecipeModule } from './recipes/recipes.module';

@Module({
  imports: [RunModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
