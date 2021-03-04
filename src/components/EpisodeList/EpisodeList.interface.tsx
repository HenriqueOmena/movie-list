import { RequestShowTv } from "components/Card/Card.interface";

export interface RequestEpisode extends RequestShowTv {
  season: number;
}

export interface EpisodeProps {
  episodes: RequestEpisode[];
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
