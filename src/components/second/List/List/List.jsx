import React from "react";
import Item from "../Item/Item";
import styles from "./List.module.css";
import { IoIosSearch } from "react-icons/io";
import Search from "../Search/Search";

function List({ onDetail, onCompare }) {
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

const inf = [
  {
    a: "A",
    title: "서울 자동차운전전문학원",
    star: "★★★☆☆",
    price: "79",
    distance: "1.2",
  },
  {
    a: "B",
    title: "명학 자동차운전전문학원",
    star: "★★★★☆",
    price: "80",
    distance: "2",
  },
  {
    a: "C",
    title: "신현대 자동차운전전문학원",
    star: "★★★☆☆",
    price: "81.2",
    distance: "1.5",
  },
  {
    a: "D",
    title: "단원 자동차운전전문학원",
    star: "★★★☆☆",
    price: "82.2",
    distance: "1.3",
  },
];

export default List;
