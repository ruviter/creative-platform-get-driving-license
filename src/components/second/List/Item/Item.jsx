import React from "react";
import styles from "./Item.module.css";
import { FaBus } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { MdOutlineNightsStay } from "react-icons/md";

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
      <div className={styles.starNcheck}>
        <span className={styles.star}>{star}</span>
        <span className={styles.icons}>
          <>
            <FaBus />
          </>
          <>
            <SlUserFemale />
          </>
          <>
            <MdOutlineNightsStay />
          </>
        </span>
        <input type="checkbox" className={styles.checkbox} />
      </div>
      <div className={styles.price}>1종 보통 - {price}만</div>
      <div className={styles.location}>나와의 거리 : {distance}km</div>
    </li>
  );
}

export default Item;
