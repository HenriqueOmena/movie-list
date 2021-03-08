export interface RequestShowTv {
  id: number;
  name: string;
  summary: string;
  url: string;
  season: number;
  number: number;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
}

export interface Shows {
  shows: RequestShowTv[];
}

export interface ShowsAction {
  type: "SET_SHOWS";
  payload: RequestShowTv[];
}

export const showsStore: Shows = {
  shows: [],
};

export const SET_SHOWS = "SET_SHOWS";

const showsReducer = (state = showsStore, action: ShowsAction) => {
  switch (action.type) {
    case SET_SHOWS:
      return { shows: [...action.payload] };

    default:
      return state;
  }
};

/**
 * Pass to reducer a action to set shows with
 * a payload contains an array of TvShows
 *
 * @param data array with shows
 * @returns
 */
export const setTvShows = (data: RequestShowTv[]) => {
  return {
    type: SET_SHOWS,
    payload: data,
  };
};

export default showsReducer;
