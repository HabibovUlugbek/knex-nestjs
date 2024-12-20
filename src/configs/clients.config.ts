import { registerAs } from "@nestjs/config";

export declare interface OpenLibraryConfig {
  url: string;
}

export const openLibraryConfig = registerAs(
  "openlibrary",
  (): OpenLibraryConfig => ({
    url: process.env.OPENLIBRARY_URL,
  })
);
