import { SearchBar } from "../components/browse-components/SearchBar";
import { CurrentMovie } from "../components/browse-components/CurrentMovie";
export const Browse = () => {
  return (
    <main className="main">
      <SearchBar />
      <CurrentMovie />
    </main>
  );
};
