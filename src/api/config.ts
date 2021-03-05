import axios from "axios";

export const apiTvMaze = axios.create({
  baseURL: "https://api.tvmaze.com/",
});
