import React from "react";
import styles from "./Item.module.css";

function Item({ onDetail }) {
  return (
    <li className={styles.container}>
      <strong
        className={styles.title}
        onClick={() => {
          onDetail(true);
        }}
      >
        서울자동차운전면허학원
      </strong>

      <div
        style={{
          color: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          {" "}
          강사 평균 별점 : <span className={styles.star}>★★★☆☆</span>
        </span>
        <span>
          <input type="checkbox" className={styles.checkbox}/>
        </span>
      </div>
      <div className={styles.price}>1종 보통 - 79만</div>
      <div className={styles.location}>나와의 거리 : 3km</div>
    </li>
  );
}

export default Item;
