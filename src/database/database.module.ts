import { Module } from "@nestjs/common";
import { KnexModule } from "nest-knexjs";
import knexConfig from "./knexfile";

@Module({
  imports: [
    KnexModule.forRoot({
      config: knexConfig,
    }),
  ],
  exports: [KnexModule],
})
export class DatabaseModule {}
