import { apiTvMaze } from "api/config";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { EpisodeDetailProps } from "./EpisodeDetail.interface";
import { Container } from "./EpisodeDetail.style";

/**
 * A page to show a single episode detail
 * @returns JSX.Element
 */

const EpisodeDetail: React.FC = () => {
  let params = useParams<{ id: string }>();
  let history = useHistory();
  const { id } = params;
  const [episode, setEpisode] = useState<EpisodeDetailProps>();

  useEffect(() => {
    (async () => {
      const { data: getEpisode } = await apiTvMaze.get(`episodes/${id}`);
      setEpisode(getEpisode);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <button type="button" onClick={() => history.push("/")}>
        Go Back
      </button>
      <h1>{episode?.name}</h1>
      <img src={episode?.image.original} alt="" />
      {episode && ReactHtmlParser(episode?.summary)}
    </Container>
  );
};

export default EpisodeDetail;
