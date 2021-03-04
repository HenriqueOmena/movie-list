import React, { useEffect, useState } from "react";
import { EpisodeProps } from "./EpisodeList.interface";
import { Container, Episode, HeaderList, Title, VideoImage } from "./EpisodeList.style";
import ReactHtmlParser from "react-html-parser";
import { formatEpisodes } from "./EpisodeList.utils";
import { LinkToEpisode } from "./components/LinkToEpisode";

const EpisodeList: React.FC<EpisodeProps> = ({ episodes }) => {
  const [episodeBySeason, setEpisodeBySeason] = useState<EpisodeProps>();
  const episodesFormatted = formatEpisodes(episodes);
  const showEpisodes = (value?: number) => episodesFormatted.find(({ season }) => season === value);

  useEffect(() => {
    setEpisodeBySeason(showEpisodes(1));
  }, []);

  const handleChange = (e: string) => setEpisodeBySeason(showEpisodes(parseInt(e)));

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
