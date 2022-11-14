import React from "react";
import { useState } from "react";
import styles from "./Person.module.css";

function Person({ inf }) {
  const imgSrc =
    "https://file.mk.co.kr/meet/neds/2021/07/image_readmed_2021_659579_16257086594710103.jpg";
  const { img, name, star } = inf;
  const [review, setReview] = useState(false);
  return (
    <div className={styles.person}>
      <img className={styles.img} src={img} alt="profile" />
      <div>{name} 강사</div>
      <div className={styles.star}>{star}</div>
      <button
        onClick={() => {
          setReview(true);
        }}
      >
        상세리뷰
      </button>
      {review && <Review onClose={setReview} />}
    </div>
  );
}

function Review({ onClose }) {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <ul>
        <li>
            <div>아이디 : 수다쟁이</div>
            <div>
            <span>별점: </span> <span>영수증 인증한 리뷰</span>
            </div>
            <div>너무 친절하게 잘 대해주셔서 한번에 합격했어요..!! 진짜 강추!!</div>

        </li>
      </ul>
    </div>
  );
}
export default Person;
