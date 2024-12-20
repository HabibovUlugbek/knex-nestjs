import { Module } from "@nestjs/common";
import { OpenLibraryService } from "./openlibrary.service";

@Module({
  exports: [OpenLibraryService],
  providers: [OpenLibraryService],
})
export class SendGridModule {}
