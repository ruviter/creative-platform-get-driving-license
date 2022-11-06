import React from "react";
import styles from "./Route.module.css";
import route from "../../../img/route.png";

function Route(props) {
  return (
    <div>
      <div className={styles.title}>가는 경로</div>
      <img className={styles.img} src={route} />
      <p>셔틀버스 있음</p>
      <p>대중교통 : 23분</p>
      <p>도보 : 45분</p>
    </div>
  );
}

export default Route;
