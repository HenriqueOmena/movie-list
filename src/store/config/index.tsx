import { createContext } from "react";
import { showsStore, Shows } from "../shows";

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
