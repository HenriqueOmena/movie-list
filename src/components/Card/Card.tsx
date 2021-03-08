import { apiTvMaze } from "api/config";
import React, { useState, useEffect, useContext } from "react";
import { FlipCard } from "./Card.style";
import ReactHtmlParser from "react-html-parser";
import { EpisodeList } from "components/EpisodeList";
import { ModalContext } from "hooks/useModal";
import { RequestShowTv } from "store/shows.interface";

/**
 *  Get the shows information and mount a Card with details about it
 *
 * @component
 * @param show - object show following the interface
 * @interface RequestShowTv
 * @returns JSX.Element
 */

const Card: React.FC<{ show: RequestShowTv }> = ({ show }) => {
  const [episodes, setEpisodes] = useState<RequestShowTv[]>();
  let { handleModal } = useContext(ModalContext);

  const showEpisodesInModal = () => {
    episodes && handleModal(<EpisodeList episodes={episodes} />);
  };

  useEffect(() => {
    (async () => {
      const { data: episodesData } = await apiTvMaze.get(`shows/${show.id}/episodes`);
      await setEpisodes(episodesData);
    })();
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
