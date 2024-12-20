import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { DatabaseModule } from "@database";
import { AuthorsController } from "./author.controller";
import { AuthorService } from "./author.service";
import { AuthorRepository } from "./repository";
import { OpenLibraryService } from "@clients";

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [AuthorsController],
  providers: [AuthorService, AuthorRepository, OpenLibraryService],
})
export class AuthorModule {}
