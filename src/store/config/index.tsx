import { createContext } from "react";
import { Shows } from "store/shows.interface";
import { showsStore } from "../shows";

export interface Store {
  store: Shows;
  dispatch(obj: any): void;
}

export const initialState: Store = {
  store: {
    ...showsStore,
  },
  dispatch() {
    return null;
  },
};

export const GlobalContext = createContext<Store>(initialState);
