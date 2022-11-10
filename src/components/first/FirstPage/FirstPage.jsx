import React from "react";
import License from "../License/License";
import Location from "../Location/Location";
import styles from "./FirstPage.module.css";
import map from "../../../img/map.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Info from "../Info/Info";

function FirstPage({ onNextPage }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerin}>
      <section className={styles.sectionIntro}>
        <Intro />
      </section>
      <section className={styles.sectionInfo}>
        <Info onNextPage={onNextPage}/>
      </section>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <>
      <div className={styles.intro}>
        <p className={styles.subtitle}>운전면허딸땐,</p>
        <div className={styles.main}> 면허따자</div>
        <p style={{ fontSize: "1.2rem", lineHeight:'0.7rem' }}>
          가격비교 + 위치비교 + 신뢰도 있는 후기 ={" "}
          <span style={{ fontWeight: "900" }}>면허따자</span>
          <p>어떤 학원을 갈지 골라봐~</p>
        </p>
      </div>
    </>
  );
}

export default FirstPage;
