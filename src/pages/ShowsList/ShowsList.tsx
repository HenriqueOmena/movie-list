import React, { useEffect } from "react";
import { Card } from "components/Card";
import { Container, WrapperCards } from "./ShowList.style";
import { apiTvMaze } from "api/config";
import { useContext } from "react";
import { GlobalContext } from "store/config";
import { setTvShows } from "store/shows";

/**
 * A page to show all TV shows
 * @returns JSX.Element
 */

const ShowsList = () => {
  const { store, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const localTvShows = localStorage.getItem("omena-tv-shows");
    localTvShows
      ? dispatch(setTvShows(JSON.parse(localTvShows)))
      : (async () => {
          const { data } = await apiTvMaze.get(`shows`);
          dispatch(setTvShows(data));
          localStorage.setItem("omena-tv-shows", JSON.stringify(data));
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <WrapperCards>
        {store.shows.map((show) => (
          <Card show={show} key={show.id} />
        ))}
      </WrapperCards>
    </Container>
  );
};

export default ShowsList;
