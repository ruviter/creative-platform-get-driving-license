import React from "react";
import styles from "./Item.module.css";
import { FaBus } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { MdOutlineNightsStay } from "react-icons/md";

import Stars from "../../Detail/People/Stars/Stars";
import { list } from "../../incheonSchoolList/list";

function Item({ name, disList, onDetail, comList, setComList }) {
  let d = 21000
  disList.map((i)=>{
    if (String(i.name) === name) {
      d = i.d
    }
    return 0
  })
  const { title, star, price1, price2, distance } = {
    title: name,
    star : list[name].ListList.star ,
    price1: list[name].ListList.price1 ,
    price2: list[name].ListList.price2,
    distance: (d / 1000).toFixed(1),
  };
  const onCheck = (e)=>{
    if(e.target.checked) {
      const newList = [...comList];
      newList.push(name)
      setComList(newList)
      console.log(comList)
    } else {
      const newList = [...comList];
      newList.pop(name)
      setComList(newList)
      console.log(comList)
    }
  }

  return (
    <li className={styles.container}>
      <strong
        className={styles.title}
        onClick={() => {
          onDetail([true,name]);
        }}
      >
        {title}
      </strong>
      <div className={styles.starNcheck}>
        <span className={styles.star}>
          {star }{" "}
          <Stars num={star} />
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
        <input type="checkbox" className={styles.checkbox} onChange={onCheck} />
      </div>
      <div className={styles.price}>
        <span>1종 보통 - {price1}만</span>{" / "}
        <span>2종 보통 - {price2}만</span>
      </div>
      <div className={styles.location}>나와의 거리 : {distance}km</div>
    </li>
  );
}

export default Item;
