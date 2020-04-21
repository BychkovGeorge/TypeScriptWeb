import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Articles} from '@app/articles/entities/articles';
import {ArticlesService} from '@app/articles/articles.service';
import {ArticlesController} from '@app/articles/articles.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Articles]),
  ],
  controllers: [
    ArticlesController,
  ],
  providers: [
    ArticlesService,
  ],
})
export class ArticlesModule {}
