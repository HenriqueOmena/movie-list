import { apiTvMaze } from "api/config";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { EpisodeDetail as EpisodeInterface } from "./EpisodeDetail.interface";
import { Container } from "./EpisodeDetail.style";

/**
 * A page to show a single episode detail
 * @returns JSX.Element
 */

const EpisodeDetail: React.FC = () => {
  let params = useParams();
  let history = useHistory<{ id: number }>();
  console.log(params, history.location.state);
  const { id } = history.location.state;
  const [episode, setEpisode] = useState<EpisodeInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const { data: getEpisode } = await apiTvMaze.get(`episodes/${id}`);
      setEpisode(getEpisode);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <button type="button" onClick={() => history.goBack()}>
        Go back
      </button>
      <h1>{episode?.name}</h1>
      <img src={episode?.image.original} alt="" />
      {episode && ReactHtmlParser(episode?.summary)}
    </Container>
  );
};

export default EpisodeDetail;
