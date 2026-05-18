export interface SearchOptions {
  query: string;
  page?: number;
  perPage?: number;
}

export interface SearchResponse {
  found: number;
  search_time_ms: number;
  search_cutoff: boolean;
  request_params: Record<any, any>;
  page: number;
  out_of: number;
  hits: {
    englishTitle: string;
    id: string;
    isAdult: boolean;
    poster: string;
    posterMedium: string;
    posterSmall: string;
    status: Status;
    title: string;
    type: MangaType;
    year: number;
  }[];
}

export enum Status {
  Completed = "Completed",
  Ongoing = "Ongoin",
}

export enum MangaType {
  Manga = "Manga",
  Manhwa = "Manwha",
}
