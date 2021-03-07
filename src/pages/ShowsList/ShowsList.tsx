import React, { useEffect, useState } from "react";
import { Card } from "components/Card";
import { Container, WrapperCards } from "./ShowList.style";
import { RequestShowTv } from "components/Card/Card.interface";
import { apiTvMaze } from "api/config";

/**
 * A page to show all TV shows
 * @returns JSX.Element
 */

const ShowsList = () => {
  const [shows, setShows] = useState<RequestShowTv[]>();

  useEffect(() => {
    const fetchData = async () => {
      const { data: showsData } = await apiTvMaze.get(`shows`);
      setShows(showsData);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <WrapperCards>
        {shows?.map((show) => (
          <Card show={show} key={show.id} />
        ))}
      </WrapperCards>
    </Container>
  );
};

export default ShowsList;
