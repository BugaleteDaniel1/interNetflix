import SearchBarCSS from "../../styles/browse-styles/search-bar.module.css";
import { AiOutlineLeft, AiOutlineRight, AiOutlineBell } from "react-icons/ai";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

export const SearchBar = () => {
  return (
    <section className={SearchBarCSS.container}>
      <div className={SearchBarCSS.arrowContainer}>
        <button className={SearchBarCSS.leftArrow}>
          <AiOutlineLeft />
        </button>
        <button className={SearchBarCSS.rightArrow}>
          <AiOutlineRight />
        </button>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={SearchBarCSS.searchForm}
        action="search"
      >
        <button className={SearchBarCSS.inputItems}>
          <HiMagnifyingGlass />
        </button>
        <input
          className={SearchBarCSS.inputItems}
          type="text"
          placeholder="search..."
        />
        <button className={SearchBarCSS.inputItems}>
          <HiXMark />
        </button>
      </form>
      <div className="notification">
        <button>
          <AiOutlineBell />
        </button>
      </div>
    </section>
  );
};
