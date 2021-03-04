import { EpisodesWithSeason, RequestEpisode } from "./EpisodeList.interface";

export const formatEpisodes = (episodes: RequestEpisode[]) => {
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

export const formatUrl = (name: string) => name.replace(/\s/g, "-");
