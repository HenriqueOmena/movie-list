import { apiTvMaze } from "api/config";
import React, { useState, useEffect, useContext } from "react";
import { RequestShowTv } from "./Card.interface";
import { FlipCard } from "./Card.style";
import ReactHtmlParser from "react-html-parser";
import { EpisodeList } from "components/EpisodeList";
import { RequestEpisode } from "components/EpisodeList/EpisodeList.interface";
import { ModalContext } from "hooks/useModal";

/**
 *  Get the shows information and mount a Card with details about it
 *
 * @component
 * @param show - object show following the interface
 * @interface RequestShowTv
 * @returns JSX.Element
 */

const Card: React.FC<{ show: RequestShowTv }> = ({ show }) => {
  const [episodes, setEpisodes] = useState<RequestEpisode[]>();
  let { handleModal } = useContext(ModalContext);

  const showEpisodesInModal = async () => {
    episodes && handleModal(<EpisodeList episodes={episodes} />);
  };

  useEffect(() => {
    const getEpisodesFromApi = async () => {
      const { data: episodesData } = await apiTvMaze.get(`shows/${show.id}/episodes`);
      await setEpisodes(episodesData);
    };
    getEpisodesFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlipCard>
      <div className="inner">
        <div className="front">
          <img src={show.image.original} alt="" />
        </div>
        <div className="back">
          <h1>{show.name}</h1>
          <article>
            <div className="summary">{ReactHtmlParser(show.summary ?? "")}</div>
          </article>
          <button onClick={() => showEpisodesInModal()}> Episodes </button>
        </div>
      </div>
    </FlipCard>
  );
};

export default Card;
