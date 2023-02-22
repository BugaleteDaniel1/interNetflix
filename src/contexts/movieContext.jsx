import { useContext, createContext, useEffect, useReducer } from "react";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const movieContext = createContext(null);

export const MovieContext = ({ children }) => {
  return (
    <movieContext.Provider value={"red"}>{children}</movieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(movieContext);
};
