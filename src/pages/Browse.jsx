import { SearchBar } from "../components/browse-components/SearchBar";
import { Banner } from "../components/browse-components/Banner";
import { PeopleReview } from "../components/browse-components/PeopleReview";
import { useMovieContext } from "../contexts/movieContext";
export const Browse = () => {
  const data = useMovieContext();
  console.log(data);
  return (
    <main className="main">
      <SearchBar />
      <Banner />
      <PeopleReview />
    </main>
  );
};
