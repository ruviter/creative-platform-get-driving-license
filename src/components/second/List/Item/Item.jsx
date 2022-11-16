import React from "react";
import styles from "./Item.module.css";
import { FaBus } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { MdOutlineNightsStay } from "react-icons/md";
import Stars from "../../Detail/People/Stars/Stars";

function Item({ disItem, onDetail }) {
  const { name, d } = disItem;
  const { title, star, price, distance } = {
    title: name,
    price: "79",
    distance: (d / 1000).toFixed(1),
  };
  return (
    <li className={styles.container}>
      <strong
        className={styles.title}
        onClick={() => {
          onDetail(true);
        }}
      >
        {title}
      </strong>
      <div className={styles.starNcheck}>
        <span className={styles.star}>
          {" "}
          <Stars num={"3"} />{" "}
        </span>
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
