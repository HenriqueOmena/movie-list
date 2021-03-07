import React, { useEffect, useState } from "react";
import { EpisodeProps } from "./EpisodeList.interface";
import { Container, Episode, HeaderList, Title, VideoImage } from "./EpisodeList.style";
import ReactHtmlParser from "react-html-parser";
import { formatEpisodes } from "./EpisodeList.utils";
import { LinkToEpisode } from "./components/LinkToEpisode";

/**
 *  Get the shows information and mount a Card with details about it
 *
 * @component
 * @param episodes - array of episodes from a show following the interface
 * @interface EpisodeProps
 * @returns JSX.Element
 */
const EpisodeList: React.FC<EpisodeProps> = ({ episodes }) => {
  const [episodeBySeason, setEpisodeBySeason] = useState<EpisodeProps>();
  const episodesFormatted = formatEpisodes(episodes);
  const showEpisodesBySeason = (seasonNumber?: number) =>
    episodesFormatted.find(({ season }) => season === seasonNumber);

  useEffect(() => {
    setEpisodeBySeason(showEpisodesBySeason(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: string) => setEpisodeBySeason(showEpisodesBySeason(parseInt(e)));

  return (
    <Container>
      <HeaderList>
        <h2>Episodes</h2>
        <select onChange={(e) => handleChange(e.currentTarget.value)}>
          {episodesFormatted.map(({ season }, index) => (
            <option key={index} value={season}>
              Season {season}
            </option>
          ))}
        </select>
      </HeaderList>
      {episodeBySeason?.episodes.map(({ image, name, runtime, summary, id, number, season }) => (
        <Episode key={id}>
          <VideoImage>
            <Title>
              <LinkToEpisode {...{ number, name, id, season }}>
                {number} - {name}
              </LinkToEpisode>
            </Title>
            <LinkToEpisode {...{ number, name, id, season }}>
              <img src={image.medium} alt={name} />
            </LinkToEpisode>
            <div className="duration">
              <div className="description">{ReactHtmlParser(summary)}</div>
              <p className="highlight">duration: {runtime} Min.</p>
            </div>
          </VideoImage>
        </Episode>
      ))}
    </Container>
  );
};

export default EpisodeList;
