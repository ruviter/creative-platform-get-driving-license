import React from "react";
import styles from './Search.module.css'
import { IoIosSearch } from "react-icons/io";

function Search({onCompare}) {
  return (
    <>
      <form className={styles.form} action="submit">
        <input type="text" placeholder="운전면허학원을 검색해 보세요" />
        <button>
          <IoIosSearch />
        </button>
      </form>
      <div className={styles.classify}>
        <strong>낮은 가격순</strong> / 높은 가격순 / 가까운 거리순 / 별점 높은순
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
