import { SearchBar } from "../components/browse-components/SearchBar";
import { CurrentMovie } from "../components/browse-components/CurrentMovie";
import { ContinueWatching } from "../components/browse-components/ContinueWatching";
export const Browse = () => {
  return (
    <main className="main">
      <SearchBar />
      <CurrentMovie />
      <ContinueWatching />
    </main>
  );
};
