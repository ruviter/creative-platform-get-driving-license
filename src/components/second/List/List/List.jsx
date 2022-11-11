import React from "react";
import Item from "../Item/Item";
import styles from "./List.module.css";
import { IoIosSearch } from "react-icons/io";
import Search from "../Search/Search";

function List({ onDetail, onCompare, inf }) {
  return (
    <div className={styles.List}>
      <Search onCompare={onCompare} />
      <ul>
        {inf.map((item) => (
          <Item inf={item} onDetail={onDetail} />
        ))}
      </ul>
    </div>
  );
}



export default List;
