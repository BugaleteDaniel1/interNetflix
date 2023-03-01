export const defaultState = {
  isDataLoaded: false,
  data: [],
};

export const reducer = (state, action) => {
  if (action.type === "GET_DATA") {
    const shuffledMovies = action.payload.sort(() => 0.5 - Math.random());
    return { ...state, data: shuffledMovies, isDataLoaded: true };
  }
  throw new Error("check the reducer function");
};
