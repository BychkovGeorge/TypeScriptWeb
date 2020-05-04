import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Users} from '@app/users/entities/users.entity';
import {Repository} from 'typeorm';
import {Articles} from '@app/articles/entities/articles';

@Injectable()
export class ArticlesService {

  constructor(
    @InjectRepository(Users)
    private readonly ArticlesRepository: Repository<Articles>,
  ) {}

  public async createArticle(title: string, body: string, author: string): Promise<Articles> {
    const article: Articles = new Articles(title, body, author);
    await this.ArticlesRepository.save(article);
    return article;
  }

  public async receiveAllArticles(): Promise<Articles[]> {
    return await this.ArticlesRepository.find();
  }

  public async getArticleByTitle(articleTitle: string): Promise<Articles> {
    return await this.ArticlesRepository.findOne({title: articleTitle});
  }

  public async getArticleByAuthor(articleAuthor: string): Promise<Articles> {
    return await this.ArticlesRepository.findOne({author: articleAuthor});
  }

  public async updateArticle(newTitle: string, oldTitle: string, newBody: string): Promise<Articles> {
    const article: Articles = await this.getArticleByTitle(oldTitle);
    article.title = newTitle;
    article.body = newBody;
    return article;
  }

  public async destroyArticle(articleTitle: string): Promise<void> {
    const article: Articles =  await this.getArticleByTitle(articleTitle);
    await this.ArticlesRepository.remove(article);
  }

}
