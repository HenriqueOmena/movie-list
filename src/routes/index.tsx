import React from "react";
import { Switch, Route } from "react-router-dom";

import EpisodeDetail from "pages/EpisodeDetail/EpisodeDetail";
import ShowsList from "pages/ShowsList/ShowsList";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ShowsList} />
    <Route path="/episode/:season/:episode/:name" component={EpisodeDetail} />
  </Switch>
);

export default Routes;
