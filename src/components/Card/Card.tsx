import { apiTvMaze } from "api/config";
import React, { useState, useEffect } from "react";
import { RequestShowTv } from "./Card.interface";
import { ExtendCard, FlipCard } from "./Card.style";
import ReactHtmlParser from "react-html-parser";
import Episode from "components/episode/Episode";
import { RequestEpisode } from "components/episode/Episode.interface";

const Card: React.FC<{ id: number }> = ({ id }) => {
  const [tvShow, setTvShow] = useState<RequestShowTv>();
  const [episodes, setEpisodes] = useState<RequestEpisode[]>();
  const [showEpisodes, setShowEpisodes] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: showsData } = await apiTvMaze.get(`shows/${id}`);
      const { data: episodesData } = await apiTvMaze.get(`shows/${id}/episodes`);

      setTvShow(showsData);
      setEpisodes(episodesData);
    };

    fetchData();
  }, []);

  return (
    <>
      <FlipCard>
        <div className="inner">
          <div className="front">
            <img src={tvShow?.image.original} alt="" />
          </div>
          <div className="back">
            <h1>{tvShow?.name}</h1>
            {ReactHtmlParser(tvShow?.summary ?? "")}

            <button onClick={() => setShowEpisodes(!showEpisodes)}> Episodes </button>
          </div>
        </div>
      </FlipCard>
      <ExtendCard extend={showEpisodes}>
        {episodes ? <Episode episodes={episodes} /> : <div>Loading</div>}
      </ExtendCard>
    </>
  );
};

export default Card;
