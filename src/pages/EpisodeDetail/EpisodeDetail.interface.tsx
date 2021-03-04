export interface EpisodeDetail {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export interface EpisodeDetailProps {
  id: number;
}
