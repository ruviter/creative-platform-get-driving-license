import React from "react";
import styles from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";

function Search({ onCompare, onFilter, filterValue }) {
  const filters = [ "가까운 거리순","낮은 가격순", "별점 높은순"];
  return (
    <>
      <form className={styles.form} action="submit">
        <input type="text" placeholder="운전면허학원을 검색해 보세요" />
        <button>
          <IoIosSearch />
        </button>
      </form>
      <div className={styles.filter}>
        {filters.map((v, index) => (
          <>
            <span
              key={index}
              onClick={() => {
                onFilter(index);
              }}
              style={
                filterValue === index ? { color: "var(--color-accent)", fontWeight:'600'} : null
              }
            >
              {v}
            </span>
            <span>{" / "}</span>
          </>
        ))}
      </div>
      <div className={styles.compare}>
        <button
          onClick={() => {
            onCompare(true);
          }}
        >
          세부 비교하기
        </button>
      </div>
    </>
  );
}

export default Search;
