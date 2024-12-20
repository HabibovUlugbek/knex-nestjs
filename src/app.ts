import { Module } from "@nestjs/common";
import { AuthorModule } from "@modules";
import { DatabaseModule } from "@database";
import { ConfigModule } from "@nestjs/config";
import { openLibraryConfig } from "@configs";
import { KnexModule } from "nest-knexjs";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [openLibraryConfig],
      cache: true,
      isGlobal: true,
    }),
    DatabaseModule,
    AuthorModule,
  ],
})
export class AppModule {}
