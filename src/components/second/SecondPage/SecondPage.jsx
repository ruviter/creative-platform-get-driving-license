import React from "react";
import { useState } from "react";
import List from "../List/List/List";
import Detail from "../Detail/Detail/Detail";
import Compare from "../Compare/Compare";
import styles from "./SecondPage.module.css";
import MapContainer from "../MapContainer/MapContainer";

function SecondPage({}) {
  const [detail, setDetail] = useState(false);
  const [compare, setCompare] = useState(false);
  const [list, setList] = useState(initialList);
  return (
    <section className={styles.section}>
      {detail ? (
        <div className={styles.detail}>
          <Detail onClose={setDetail} />
        </div>
      ) : (
        <>
          <div className={styles.map}>
            <MapContainer />
          </div>
          <List onDetail={setDetail} onCompare={setCompare} inf={list} />
        </>
      )}
      {compare && <Compare onClose={setCompare} />}
    </section>
  );
}

const initialList = [
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
export default SecondPage;
