import React from "react";
import styles from "./Item.module.css";

function Item({onDetail}) {
  return (
    <li className={styles.container} onClick={()=>{onDetail(true)}}>
      <strong className={styles.title}>서울자동차운전면허학원</strong>
      <div className={styles.star}>★★★☆☆</div>
      <div className={styles.detail}>저희 학원은 친절한 서비스로 모시는...</div>
      <div className={styles.price}>1종 보통 - 79만</div>
      <div className={styles.location}>나와의 거리 : 3km</div>
    </li>
  );
}

export default Item;
