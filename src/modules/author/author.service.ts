import { Injectable } from "@nestjs/common";
import { AuthorRepository } from "./repository";
import { OpenLibraryService } from "@clients";

@Injectable()
export class AuthorService {
  constructor(
    private readonly authorRepo: AuthorRepository,
    private readonly openlibraryService: OpenLibraryService
  ) {}

  async syncAuthors(query: string) {
    const data = await this.openlibraryService.searchAuthors(query);

    for (const author of data.docs) {
      const { key, _version_ } = author;

      const existingAuthor = await this.authorRepo.findAuthorByKey(key);

      if (existingAuthor) {
        if (existingAuthor.version !== _version_) {
          await this.authorRepo.updateAuthor(key, {
            key,
            version: _version_,
            name: author.name,
            type: author.type,
            birth_date: author.birth_date,
            top_work: author.top_work,
            work_count: author.work_count,
          });
        }
      } else {
        await this.authorRepo.insertAuthor({
          key,
          version: _version_,
          name: author.name,
          type: author.type,
          birth_date: author.birth_date,
          top_work: author.top_work,
          work_count: author.work_count,
        });
      }
    }
  }
}
