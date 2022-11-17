import React from "react";
import { useState } from "react";
import List from "../List/List/List";
import Detail from "../Detail/Detail/Detail";
import Compare from "../Compare/Compare";
import styles from "./SecondPage.module.css";
import MapContainer from "../MapContainer/MapContainer";

function SecondPage({}) {
  const [detail, setDetail] = useState([false]);
  const [list, setList] = useState(initialList);
  const [disList, setDisList] = useState(defaultDisList);
  return (
    <section className={styles.section}>
      {detail[0] ? (
        <div className={styles.detail}>
          <Detail onClose={setDetail} name={detail[1]} />
        </div>
      ) : (
        <>
          <div className={styles.map}>
            <MapContainer setDisList={setDisList} />
          </div>
          <List onDetail={setDetail} disList={disList} />
        </>
      )}
    </section>
  );
}
const defaultDisList = [
  {
    name: "한빛자동차운전전문학원",
    d: "21644",
  },
  {
    name: "e현대자동차운전전문학원",
    d: "21822",
  },
  {
    name: "동아자동차운전전문학원",
    d: "23985",
  },
  {
    name: "인기자동차운전전문학원",
    d: "24346",
  },
  {
    name: "주신자동차운전전문학원",
    d: "30755",
  },
  {
    name: "인천자동차운전전문학원",
    d: "31295",
  },
  {
    name: "시엘자동차운전전문학원",
    d: "31348",
  },
];
const initialList = [
  {
    name: "서울 자동차운전전문학원",
    star: "3",
    price1: "79",
    price2: "79",
  },
  {
    name: "명학 자동차운전전문학원",
    star: "3",
    price1: "80",
    price2: "80",
  },
  {
    name: "신현대 자동차운전전문학원",
    star: "3",
    price1: "81.2",
    price2: "81.2",
  },
  {
    name: "단원 자동차운전전문학원",
    star: "3",
    price1: "82.2",
    price2: "82.2",
  },
];
export default SecondPage;
