import React from "react";
import styles from "./Detail.module.css";
import People from "../People/People";
import Price from "../Price/Price";
import Route from "../Route/Route";
import { FaBus } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { MdOutlineNightsStay } from "react-icons/md";
import { list } from "../../incheonSchoolList/list";

function Detail({ onClose, name }) {
  return (
    <>
      <button className={styles.close} onClick={() => onClose([false,name])}>
        X
      </button>
      <div className={styles.price}>
        <Price title={name} />
      </div>
      <section className={styles.section}>
        <div className={styles.people}>
          <People />
        </div>
        <div className={styles.details}>
          <Details name={name} />
        </div>
      </section>
      <div className={styles.route}>
        <Route />
      </div>
    </>
  );
}
function Details({name}) {
  return (
    <div className={styles.detailsContainer} style={{ flex: "1" }}>
      <div className={styles.title}>세부정보</div>
      <p>상세주소 : {list[name].address_name}</p>
      <p>영업시간 : 오전 9 : 00 ~ 오후 20 : 00</p>
      <p>전화번호 : {list[name].phone}</p>
      <p>홈페이지 : {list[name].place_url}</p>
      <p className={styles.icons}>
        <span>
          <FaBus />
           
        </span>
        <span>
          <SlUserFemale />
           
        </span>
        <span>
          <MdOutlineNightsStay />
          
        </span>
      </p>
      <p className={styles.iconsDesc}>
        <span>
          셔틀버스 보유
        </span>
        <span>
          여성강사 보유
        </span>
        <span>
          야간수업 존재
        </span>
      </p>
    </div>
  );
}

export default Detail;
