import { RequestShowTv } from "store/shows.interface";
import { EpisodesWithSeason } from "./EpisodeList.interface";

/**
 * Get all episodes and covert to a structure by season with episodes
 * @param episodes - array of episodes from a season
 */
export const formatEpisodes = (episodes: RequestShowTv[]) => {
  return episodes.reduce<EpisodesWithSeason[]>((prev, episode) => {
    const ind = prev.findIndex((epi) => epi.season === episode.season);
    if (ind !== -1) {
      prev[ind].episodes = [...prev[ind].episodes, episode];
      return prev;
    } else {
      return [...prev, { season: episode.season, episodes: [episode] }];
    }
  }, []);
};

/**
 * Format a name removing the space and adding -
 * @param name - string with the name
 * @returns
 */
export const formatUrl = (name: string) => name.replace(/\s/g, "-");
