import { Injectable, BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import type { OpenLibraryGetResponse } from "./interfaces";

@Injectable()
export class OpenLibraryService {
  readonly #_http: HttpService;
  readonly #_url: string;

  constructor(http: HttpService, config: ConfigService) {
    this.#_http = http;

    this.#_url = config.getOrThrow<string>("openlibrary.url");
  }

  async searchAuthors(query: string): Promise<OpenLibraryGetResponse> {
    try {
      const { data } = await firstValueFrom(
        this.#_http.get<OpenLibraryGetResponse>(
          `${this.#_url}/search/authors.json?q=${query}`,
          {
            headers: {
              accept: "application/json",
              "content-type": "application/json",
            },
            validateStatus: (): boolean => true,
          }
        )
      );

      if (!data) {
        throw new BadRequestException("No data found");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}
