import { Container } from "./CollapseMenu.style";
import React, { useState } from "react";
import { episodesBySeason } from "components/episode/Episode.interface";

const CollapseMenu: React.FC<episodesBySeason> = ({ season, episodes }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <button onClick={() => setIsOpen(!isOpen)} className={`collapsible ${isOpen && "active"}`}>
        {season}
      </button>
      <div className={`content ${isOpen && "active"}`}>
        <ul>
          {episodes.map((episode) => (
            <a href={episode.url}>
              <li key={episode.id}>{episode.name}</li>
            </a>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default CollapseMenu;
