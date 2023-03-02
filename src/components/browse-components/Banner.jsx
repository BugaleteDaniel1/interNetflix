import { useMovieContext } from "../../contexts/movieContext";
import { Comments } from "./Comments";
import BannerCSS from "../../styles/browse-styles/banner.module.css";
import { useEffect, useReducer, useRef } from "react";

const imgUrl = import.meta.env.VITE_IMG_URL;

export const Banner = () => {
  const { state, dispatch } = useMovieContext();
  const { data: movieData, isDataLoaded } = state;

  const container = useRef(null);
  const movie = useRef(null);

  // useEffect(() => {
  //   const resizeBrowser = () => {
  //     const containerWidth = container.current.getBoundingClientRect().width;
  //     console.log(containerWidth);
  //     movie.current.style.width = `${containerWidth}px`;
  //     console.log(movie.current.style.width);
  //   };
  //   window.addEventListener("resize", resizeBrowser);
  //   return () => {
  //     window.removeEventListener("resize", resizeBrowser);
  //   };
  // }, [window.innerWidth]);

  const movieBanner = movieData.map((el) => {
    console.log(el);
    return (
      <div ref={movie} className={BannerCSS.container} key={el.id}>
        <div
          className={BannerCSS.banner}
          style={{ backgroundImage: `url(${imgUrl + el.backdrop_path})` }}
        >
          <div className={BannerCSS.info}>
            <div className="rating">Overall Rating: {el.vote_average}</div>
            <div className={BannerCSS.bottom}>
              <h3 className={BannerCSS.title}>{el.original_title}</h3>
              <button className="watch-btn">watch </button>
              <button className="add-btn"> + </button>
            </div>
          </div>

          <div className={BannerCSS.postersContainer}>
            <img
              className={BannerCSS.posterImg}
              src={imgUrl + el.poster_path}
              alt="the poster of the movie"
            />
            <img
              className={BannerCSS.posterImg}
              src={imgUrl + el.poster_path}
              alt="the poster of the movie"
            />
            <img
              className={BannerCSS.posterImg}
              src={imgUrl + el.poster_path}
              alt="the poster of the movie"
            />
          </div>
        </div>
        <Comments />
      </div>
    );
  });

  return (
    <section ref={container} className={BannerCSS.posterSection}>
      <>{movieBanner}</>
    </section>
  );
};
