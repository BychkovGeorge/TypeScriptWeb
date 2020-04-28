import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {createHash} from "crypto";

@Entity({
  name: 'users',
})
export class Users {

  public computeSHA256(lines: string): string {
    const hash = createHash('sha256');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim(); // remove leading/trailing whitespace
      if (line === '') { continue; } // skip empty lines
      hash.write(line); // write a single line to the buffer
    }

    return hash.digest('base64'); // returns hash as string
  }

  constructor(login: string, password: string) {
    this.login = login;
    this.password = this.computeSHA256(password);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

@Column()
  login: string;

@Column()
  password: string;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;
}
