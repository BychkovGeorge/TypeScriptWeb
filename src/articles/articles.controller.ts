import {Controller, Delete, Get, Put} from '@nestjs/common';
import {ArticlesService} from '@app/articles/articles.service';
import {Articles} from '@app/articles/entities/articles';

@Controller('articles')
export class ArticlesController {

  constructor(
    private readonly articleService: ArticlesService,
  ) {}

  @Get('newArticle')
  public async logUpArticle(title: string, body: string, author: string): Promise<Articles> {
    return await this.articleService.createArticle(title, body, author);
  }

  @Get('getAll')
  public async getAllArticles(): Promise<Articles[]> {
    return await this.articleService.receiveAllArticles();
  }

  @Get('oneByTitle')
  public async getOneByTitle(articleTitle: string): Promise<Articles> {
    return await this.articleService.getArticleByTitle(articleTitle);
  }

  @Get('oneByAuthor')
  public async getOneByAuthor(articleAuthor: string): Promise<Articles> {
    return await this.articleService.getArticleByAuthor(articleAuthor);
  }

  @Put('update')
  public async updateArticle(newTitle: string, oldTitle: string, newBody: string): Promise<Articles> {
    return await this.articleService.updateArticle(newTitle, oldTitle, newBody);
  }

  @Delete('destroy')
  public async deleteArticle(articleTitle: string): Promise<void> {
    await this.articleService.destroyArticle(articleTitle);
  }
}
