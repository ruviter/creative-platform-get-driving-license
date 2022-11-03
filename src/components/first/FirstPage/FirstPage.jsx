import React from "react";
import License from "../License/License";
import Location from "../Location/Location";
import styles from "./FirstPage.module.css";

function FirstPage(props) {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <div className={styles.introdiv}>
          <div className={styles.main}>면허딸땐, 면허따자!</div>
          <p>
            가격비교 + 위치비교 + 신뢰도 있는 리뷰 = <span style={{fontWeight:'900' }}>면허따자</span>
            <p>어떤 학원을 갈지 천천히 골라봐~</p>
          </p>
        </div>
      </section>
      <section className={styles.info}>
        <div className={styles.loc}>
          <Location />
        </div>
        <div className={styles.license}>
          <License />
        </div>
      </section>
    </div>
  );
}

export default FirstPage;
