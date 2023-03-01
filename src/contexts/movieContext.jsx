import { useContext, createContext, useEffect, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import { defaultState, reducer } from "../helpers/defaultStateReducerMovie";

const url = import.meta.env.VITE_POPULAR_URL;
const key = import.meta.env.VITE_API_KEY;
const fetch = url + key;

const movieContext = createContext(null);

export const MovieContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const data = useFetch(fetch);
  const movies = data[0].results;
  useEffect(() => {
    if (movies) {
      dispatch({ type: "GET_DATA", payload: movies });
    }
  }, [movies]);

  return (
    <movieContext.Provider value={{ state, dispatch }}>
      {children}
    </movieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(movieContext);
};
