import { createContext } from "react";
import { useReducer } from 'react'
import { reducer } from "./reducer";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const[state,dispatch]=useReducer(reducer, initialState)

  return (
    <ContextGlobal.Provider value={{dispatch, state}}>
      {children}
    </ContextGlobal.Provider>
  );
};
