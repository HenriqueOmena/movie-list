import { apiTvMaze } from "api/config";
import React, { useState, useEffect, useContext } from "react";
import { RequestShowTv } from "./Card.interface";
import { FlipCard } from "./Card.style";
import ReactHtmlParser from "react-html-parser";
import { EpisodeList } from "components/EpisodeList";
import { RequestEpisode } from "components/EpisodeList/EpisodeList.interface";
import { ModalContext } from "hooks/useModal";

const Card: React.FC<{ id: number }> = ({ id }) => {
  const [tvShow, setTvShow] = useState<RequestShowTv>();
  const [episodes, setEpisodes] = useState<RequestEpisode[]>();
  let { handleModal } = useContext(ModalContext);

  const handleShowEpisodes = () => {
    handleModal(episodes && <EpisodeList episodes={episodes} />);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data: showsData } = await apiTvMaze.get(`shows/${id}`);
      const { data: episodesData } = await apiTvMaze.get(`shows/${id}/episodes`);

      setTvShow(showsData);
      setEpisodes(episodesData);
    };

    fetchData();
  }, [id]);

  return (
    <FlipCard>
      <div className="inner">
        <div className="front">
          <img src={tvShow?.image.original} alt="" />
        </div>
        <div className="back">
          <h1>{tvShow?.name}</h1>
          <article>{ReactHtmlParser(tvShow?.summary ?? "")}</article>
          <button onClick={() => handleShowEpisodes()}> Episodes </button>
        </div>
      </div>
    </FlipCard>
  );
};

export default Card;
