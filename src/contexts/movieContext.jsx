import { useContext, createContext, useEffect, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;
const fetch = url + key;

const movieContext = createContext(null);

export const MovieContext = ({ children }) => {
  const data = useFetch(fetch);
  console.log(data);
  return (
    <movieContext.Provider value={"red"}>{children}</movieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(movieContext);
};
