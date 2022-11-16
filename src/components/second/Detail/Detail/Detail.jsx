import React from "react";
import styles from "./Detail.module.css";
import People from "../People/People";
import Price from "../Price/Price";
import Route from "../Route/Route";
import { FaBus } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { MdOutlineNightsStay } from "react-icons/md";

function Detail({ onClose }) {
  return (
    <>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <div className={styles.price}>
        <Price title={"서울 자동차운전면허학원"} />
      </div>
      <section className={styles.section}>
        <div className={styles.people}>
          <People />
        </div>
        <div className={styles.details}>
          <Details />
        </div>
      </section>
      <div className={styles.route}>
        <Route />
      </div>
    </>
  );
}
function Details() {
  return (
    <div className={styles.detailsContainer} style={{ flex: "1" }}>
      <div className={styles.title}>세부정보</div>
      <p>상세주소 : 경기 의왕시 경수대로 321</p>
      <p>영업시간 : 오전 9 : 00 ~ 오후 20 : 00</p>
      <p>전화번호 : 031-325-3405</p>
      <p>홈페이지 : https://encycolorpedia.kr/808080</p>
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
