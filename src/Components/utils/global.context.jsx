import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

export const initialState = {
  theme: "light",
  data: [],
  loading: false,
  error: null,
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "GetDataFromAPI_LOADING" });

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch({ type: "GetDataFromAPI_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "GetDataFromAPI_ERROR", payload: error });
      }
    };

    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
