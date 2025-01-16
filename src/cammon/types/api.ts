export interface Request {
  title?: string;
  list?: string;
  genre_id?: number;
  page?: string | number;
}

export interface Response<T = any> {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}
