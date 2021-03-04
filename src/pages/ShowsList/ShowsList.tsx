import React, { useContext, useState } from "react";
import { Card } from "components/Card";

import { Container, WrapperCards } from "./ShowList.style";

const ShowsList = () => {
  return (
    <Container>
      <WrapperCards>
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
        <Card id={5} />
        <Card id={6} />
        <Card id={7} />
        <Card id={8} />
        <Card id={9} />
      </WrapperCards>
    </Container>
  );
};

export default ShowsList;
