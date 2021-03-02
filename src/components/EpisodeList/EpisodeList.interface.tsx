import { RequestShowTv } from "components/Card/Card.interface";

export interface RequestEpisode extends RequestShowTv {
  season: number;
}

export interface EpisodeProps {
  episodes: RequestEpisode[];
}

export interface episodesBySeason extends EpisodeProps {
  season: number;
}
