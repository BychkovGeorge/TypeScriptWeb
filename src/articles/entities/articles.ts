import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'articles'})
export class Articles {

  constructor(title: string, body: string, author: string) {
    this.title = title;
    this.body = body;
    this.author = author;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  author: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;
}
