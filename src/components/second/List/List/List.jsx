import React from "react";
import Item from "../Item/Item";
import styles from "./List.module.css";
import { IoIosSearch } from "react-icons/io";
import Search from "../Search/Search";
import { list } from "../../incheonSchoolList/list";
import { useState } from "react";
import { useEffect } from "react";
import Compare from "../../Compare/Compare";

function List({ onDetail, disList }) {
  const [filter, setFilter] = useState(0);
  const [compare, setCompare] = useState(false);
  const [comList, setComList] = useState([])
  const [sortedList, setSortedList] = useState(initSortedList);
  useEffect(() => {
    filting(filter, disList, setSortedList);
  }, [filter]);
  return (
    <div className={styles.List}>
      <Search onCompare={setCompare} onFilter={setFilter} filterValue={filter} />
      <ul>
        {sortedList.map((name, index) =>
          index < 4 ? (
            <Item  name={name} disList={disList} comList={comList} setComList={setComList} onDetail={onDetail} />
          ) : null
        )}
      </ul>
      {compare && <Compare onClose={setCompare} comList={comList} />}
    </div>
  );
}

const filting = (filter, disList, setSortedList) => {
  const newList = disList
    .slice(0, 4)
    .map(({ name }) => list[name])
    .map((i) => i.ListList);
  if (filter === 0) {
    setSortedList(disList.map((i) => i.name));
  }
  if (filter === 1) {
    setSortedList(
      newList.sort((a, b) => a.price1 - b.price1).map((i) => i.name)
    );
  }
  if (filter === 2) {
    setSortedList(newList.sort((a, b) => b.star - a.star).map((i) => i.name));
  }
};

const initSortedList = [
  "한빛자동차운전전문학원",
  "인천자동차운전전문학원",
  "주신자동차운전전문학원",
  "동아자동차운전전문학원",
];

const initComList = [
  "한빛자동차운전전문학원",
  "인천자동차운전전문학원",
  "주신자동차운전전문학원",
];

export default List;
