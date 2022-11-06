import React from "react";
import styles from "./Item.module.css";

function Item({ inf, onDetail }) {
  const { a, title, star, price, distance } = inf;
  return (
    <li className={styles.container}>
      <strong
        className={styles.title}
        onClick={() => {
          onDetail(true);
        }}
      >
        {a} {title}
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
          강사 평균 별점 : <span className={styles.star}>{star}</span>
        </span>
        <span>
          <input type="checkbox" className={styles.checkbox} />
        </span>
      </div>
      <div className={styles.price}>1종 보통 - {price}만</div>
      <div className={styles.location}>나와의 거리 : {distance}km</div>
    </li>
  );
}

export default Item;
