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
    document: SearchResult;
  }[];
}

export interface SearchResult {
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
}

export enum Status {
  Completed = "Completed",
  Ongoing = "Ongoin",
}

export enum MangaType {
  Manga = "Manga",
  Manhwa = "Manwha",
}

export interface GetInfoOptions {
  id: string;
}

export interface GetInfoResponse {
  mangaPage: MangaInfo;
}

export interface MangaInfo {
  id: string;
  released: number;
  scanlators: Scanlator[];
  views: string;
  authors: Author[];
  banner: {
    url: string;
    aspectRatio: number;
  };
  genras: Genra[];
  englishTitle: string;
  isAdult: boolean;
  poster: {
    id: string;
    image: string;
    smallImage: string;
    mediumImage: string;
    largeImage: string;
  };
  title: string;
  type: MangaType;
  otherNames: string[];
  synopsis: string;
  anilistId?: string;
  apId?: string;
  kitsuId?: string;
  annId?: string;
  mangaBakaId?: string;
  malId?: string;
  mangaUpdatesId: string;
  status: Status;
  avgRating: number;
  commentSectionId: string;
  totalChapterCount: number;
  hasMoreChapters: boolean;
  chapters: Chapter[];
}

export interface Scanlator {
  id: string;
  name: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  type: "Author";
}

export interface Genra {
  id: string;
  name: string;
}

export interface Chapter {
  id: string;
  scanlationMangaId: string;
  title: string;
  number: number;
  createdAt: number;
  index: number;
  pageCount: number;
  progress?: number;
}

export interface GetChapterPanelsOptions {
  mangaId: string;
  chapterId: string;
}

export interface GetChapterPanelsResponse {
  readChapter: ChapterPanelsData;
}

export interface ChapterPanelsData {
  id: string;
  title: string;
  scanlationMangaId: string;
  pages: Page[];
}

export interface Page {
  id: string;
  image: string;
  number: number;
  width: number;
  height: number;
  aspectRatio: number;
}

export interface GetChapterBufferOptions {
  image: string;
}
