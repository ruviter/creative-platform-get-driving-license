import React from "react";
import Item from "../Item/Item";
import styles from "./List.module.css";
import { IoIosSearch } from "react-icons/io";
import Search from "../Search/Search";
import { list } from "../../incheonSchoolList/list";
import { useState } from "react";

function List({ onDetail, onCompare, disList }) {
  const [filter, setFilter] = useState(0);
  // const sortedList = filting(filter, disList);
  const sortedList = ['한빛자동차운전전문학원','인천자동차운전전문학원','주신자동차운전전문학원','동아자동차운전전문학원'];
  console.log(sortedList);
  return (
    <div className={styles.List}>
      <Search onCompare={onCompare} onFilter={setFilter} filterValue={filter} />
      <ul>
        {sortedList.map((name, index) =>
          index < 4 ? (
            <Item name={name} disList={disList} onDetail={onDetail} />
          ) : null
        )}
      </ul>
    </div>
  );
}

const filting = (filter, disList) => {
  const newList = disList
    .slice(0, 4)
    .map(({ name }) => list[name])
    .map((i) => i.ListList);
  if (filter === 0) {
    return;
  }
  if (filter === 1) {
    return newList.sort((a, b) => a.price1 - b.price1).map((i) => i.name);
  }
  if (filter === 2) {
    return newList.sort((a, b) => b.star - a.star).map((i) => i.name);
  }
};

export default List;
