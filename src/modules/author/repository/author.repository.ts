import { Inject, Injectable } from "@nestjs/common";
import { AuthorInterface } from "../interfaces";
import { InjectConnection } from "nest-knexjs";
import { Knex } from "knex";

@Injectable()
export class AuthorRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findAuthorByKey(key: string): Promise<AuthorInterface> {
    return this.knex("author").where("key", key).first();
  }
  async insertAuthor(
    data: Omit<AuthorInterface, "id">
  ): Promise<AuthorInterface> {
    return this.knex("author").insert(data);
  }
  async updateAuthor(
    key: string,
    data: Partial<Omit<AuthorInterface, "id">>
  ): Promise<AuthorInterface> {
    return this.knex("author").where("key", key).update(data);
  }
}
