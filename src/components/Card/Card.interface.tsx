export interface RequestShowTv {
  id: number;
  name: string;
  summary: string;
  url: string;
  season: number;
  number: number;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
}
