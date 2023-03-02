import { useMovieContext } from "../../contexts/movieContext";
import ContinueWatchingCSS from "../../styles/browse-styles/continue-watching.module.css";

const URL = import.meta.env.VITE_IMG_URL;

export const ContinueWatching = () => {
  const { state } = useMovieContext();
  const placeholder = state.data;
  const card = placeholder.map((movie) => {
    return (
      <div key={movie.id} className={ContinueWatchingCSS.card}>
        <div
          style={{ backgroundImage: `url(${URL + movie.backdrop_path})` }}
          className={ContinueWatchingCSS.topCard}
        >
          <div className="rating">ovr: {movie.vote_average}</div>
          <button className="add-btn">+</button>
        </div>
        <div className={ContinueWatchingCSS.bottomCard}>
          <h4 className={ContinueWatchingCSS.title}>{movie.original_title}</h4>
          <p className={ContinueWatchingCSS.description}>{movie.overview}</p>
          <button
            style={{ margin: ` calc(20px * 0.3)`, boxShadow: "none" }}
            className="watch-btn"
          >
            watch
          </button>
        </div>
      </div>
    );
  });

  return (
    <section>
      <h3>Continue Watching</h3>
      <div className={ContinueWatchingCSS.wrapper}>{card}</div>
    </section>
  );
};
