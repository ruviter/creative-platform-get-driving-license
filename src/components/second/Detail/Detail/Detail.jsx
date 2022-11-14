import React from "react";
import styles from "./Detail.module.css";
import People from "../People/People";
import Price from "../Price/Price";
import Route from "../Route/Route";

function Detail({onClose}) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
function Details() {
  return (
    <div style={{ flex: "1" }}>
      <div className={styles.title}>세부정보</div>
      <p>학원소개글 : 저희학원은 친절한 서비스로 모시는 뭐시꺵이..</p>
      <p>상세주소 : 경기 의왕시 경수대로 321</p>
      <p>영업시간 : 오전 9 : 00 ~ 오후 20 : 00</p>
      <p>전화번호 : 031-325-3405</p>
      <p>홈페이지 : https://encycolorpedia.kr/808080</p>
    </div>
  );
}

export default Detail;
