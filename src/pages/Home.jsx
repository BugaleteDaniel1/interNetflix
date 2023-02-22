import { SearchBar } from "../components/home-components/SearchBar";
import { Banner } from "../components/home-components/Banner";
import { PeopleReview } from "../components/home-components/PeopleReview";
import { useMovieContext } from "../contexts/movieContext";
export const Home = () => {
  const data = useMovieContext();
  console.log(data);
  return (
    <main>
      <SearchBar />
      <Banner />
      <PeopleReview />
    </main>
  );
};
