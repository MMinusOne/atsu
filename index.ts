import ky from "ky";
import { type KyInstance } from "ky";
import { type SearchResponse, type SearchOptions } from "./types";

export class Atsu {
  private readonly api: KyInstance;

  constructor(
    readonly baseUrl: string = "https://atsu.moe",
    readonly retryLimit: number = 3,
    readonly proxyUrl?: string,
  ) {
    this.api = ky.create({
      referrer: this.baseUrl,

      retry: {
        limit: this.retryLimit,
        methods: ["get", "post"],
        backoffLimit: 3000,
      },
    });
  }

  async search(searchOptions: SearchOptions) {
    const url = new URL(
      `${this.baseUrl}/collections/manga/documents/search`,
      this.baseUrl,
    );

    url.searchParams.set("q", searchOptions.query);
    url.searchParams.set("query_by", "title,englishTitle,otherNames,authors");
    url.searchParams.set("query_by_weights", "4,3,2,1");
    url.searchParams.set("num_typos", "4,3,2,1");
    url.searchParams.set(
      "include_fields",
      "id,title,englishTitle,poster,posterSmall,posterMedium,type,isAdult,status,year",
    );
    url.searchParams.set("filter_by", "views:>0");
    url.searchParams.set("page", String(searchOptions.page ?? 1));
    url.searchParams.set("per_page", String(searchOptions.perPage ?? 40));

    const response = await this.api
      .get<SearchResponse>(url)
      .then((r) => r.json());

    return response;
  }
}
