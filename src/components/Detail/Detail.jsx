import React from "react";
import styles from "./Detail.module.css";
import People from "./People/People";
import Price from "./Price/Price";
import Route from "./Route/Route";

function Detail({}) {
  return (
    <>
      <div className={styles.price}>
        <Price />
      </div>
      <section className={styles.section}>
        <div className={styles.route}>
          <Route />
        </div>
        <section style={{ flex: "1", display:'flex', flexDirection:'column'}}>
          <div className={styles.people}>
            <People />
          </div>
          <div style={{flex:'1'}}>
          <p style={{color:'black'}}>학원소개글 : 저희학원은 친절한 서비스로 모시는 뭐시꺵이..</p>
          <p style={{color:'black'}}>전화번호 : 031-325-3405</p>
            <p style={{color:'black'}}>홈페이지 : https://encycolorpedia.kr/808080</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Detail;
