import React from "react";
import License from "../License/License";
import Location from "../Location/Location";
import styles from "./FirstPage.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function FirstPage({ onNextPage }) {
  const imgSrc =
    "https://velog.velcdn.com/images%2Fminn602%2Fpost%2Fb49932ff-9d9c-4711-a4df-73f2e6111fc4%2Fimage.png";
  return (
    <div className={styles.container}>
      <section className={styles.sectionIntro}>
        <div className={styles.intro}>
          <p style={{marginBottom:'7px', fontSize:'1.3rem'}}>운전면허딸땐,</p>
          <div className={styles.main}> 면허따자</div>
          <p style={{fontSize:'1.2rem'}}>
            가격비교 + 위치비교 + 신뢰도 있는 리뷰 ={" "}
            <span style={{ fontWeight: "900" }}>면허따자</span>
            <p>어떤 학원을 갈지 천천히 골라봐~</p>
          </p>
        </div>
        <img className={styles.img} src={imgSrc} />
      </section>
      <section className={styles.info}>
        <div className={styles.loc}>
          <Location />
        </div>
        <div className={styles.license}>
          <License />
        </div>
      </section>
      <button
        className={styles.move}
        onClick={() => {
          onNextPage(2);
        }}
      >
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
}

export default FirstPage;
