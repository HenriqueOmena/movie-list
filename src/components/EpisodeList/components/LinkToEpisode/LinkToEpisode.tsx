import { LinkToEpisodeProps } from "components/EpisodeList/EpisodeList.interface";
import { formatUrl } from "components/EpisodeList/EpisodeList.utils";
import { ModalContext } from "hooks/useModal";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

/**
 * All parameter of a Episode to generate a correctly URL
 *
 * @param number - number
 * @param name - string
 * @param episode - number
 * @param id - number
 * @returns
 */
const LinkToEpisode: React.FC<LinkToEpisodeProps> = ({ number, name, season, id, children }) => {
  const { handleModal } = useContext(ModalContext);

  const urlWithParams = (season: number, episode: number, name: string, id: number) => ({
    pathname: `episode/${id}/${season}/${episode}/${formatUrl(name)}`,
    state: { id },
  });

  return (
    <Link to={urlWithParams(season, number, name, id)} key={id} onClick={() => handleModal()}>
      {children}
    </Link>
  );
};

export default LinkToEpisode;
