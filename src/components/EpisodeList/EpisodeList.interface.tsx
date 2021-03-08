import { RequestShowTv } from "store/shows.interface";

export interface EpisodeProps {
  episodes: RequestShowTv[];
}

export interface EpisodesWithSeason extends EpisodeProps {
  season: number;
}

export interface LinkToEpisodeProps {
  id: number;
  number: number;
  season: number;
  name: string;
}
