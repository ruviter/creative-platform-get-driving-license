import React from "react";
import Item from "../Item/Item";
import styles from "./List.module.css";
import { IoIosSearch } from "react-icons/io";
import Search from "../Search/Search";
import { list } from "../../incheonSchoolList/list";
import { useState } from "react";

function List({ onDetail, onCompare, disList }) {
  const [filter, setFilter] = useState(0);
  return (
    <div className={styles.List}>
      <Search onCompare={onCompare} onFilter={setFilter} filterValue={filter} />
      <ul>
        {disList.map((item, index) =>
          index < 4 ? <Item disItem={item} onDetail={onDetail} /> : null
        )}
      </ul>
    </div>
  );
}

export default List;
