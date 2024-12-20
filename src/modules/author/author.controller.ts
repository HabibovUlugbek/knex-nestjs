import { Controller, Get, Query } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { FilterQueryDto } from "./dtos";

@Controller("authors")
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @Get("sync")
  async syncAuthors(@Query() { query }: FilterQueryDto) {
    await this.authorService.syncAuthors(query);
    return { message: "Authors synchronized successfully" };
  }
}
