export interface ExtraRequest {
  rating: {
    average: number;
  };
  genres: string[];
  _links: { previousepisode: string };
}

export interface RequestShowTv {
  id: number;
  name: string;
  summary: string;
  url: string;
  image: {
    medium: string;
    original: string;
  };
}
