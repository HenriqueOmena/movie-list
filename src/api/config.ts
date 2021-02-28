import axios from "axios";

export const apiTvMaze = axios.create({
  baseURL: "http://api.tvmaze.com/",
});
