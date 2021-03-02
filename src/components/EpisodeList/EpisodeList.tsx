import { CollapseMenu } from "components/CollapseMenu";
import React from "react";
import { EpisodeProps, RequestEpisode, episodesBySeason } from "./EpisodeList.interface";
import { Container } from "./EpisodeList.style";

const EpisodeList: React.FC<EpisodeProps> = ({ episodes }) => {
  const [seasons, setSeasons] = React.useState<RequestEpisode[]>();

  React.useEffect(() => {
    setSeasons(episodes);
  }, []);

  const formatEpisodes = seasons?.reduce<episodesBySeason[]>((prev, episode) => {
    const ind = prev.findIndex((epi) => epi.season === episode.season);
    if (ind !== -1) {
      prev[ind].episodes = [...prev[ind].episodes, episode];
      return prev;
    } else {
      return [...prev, { season: episode.season, episodes: [episode] }];
    }
  }, []);

  return (
    <Container>
      {formatEpisodes &&
        formatEpisodes.map(({ season, episodes }) => (
          <CollapseMenu episodes={episodes} season={season} key={season} />
        ))}
    </Container>
  );
};

export default EpisodeList;
