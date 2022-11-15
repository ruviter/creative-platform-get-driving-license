import React from "react";
import { useState } from "react";
import styles from "./Person.module.css";

function Person({ teacher }) {
  const imgSrc =
    "https://file.mk.co.kr/meet/neds/2021/07/image_readmed_2021_659579_16257086594710103.jpg";
  const { img, name, star, reviews } = teacher;
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
      {review && <Review onClose={setReview} reviews={reviews}/>}
    </div>
  );
}

function Review({ onClose, reviews }) {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <div></div>
      <ul className={styles.ul}>
        {Object.keys(reviews).map((r) => (
          <li key={r} className={styles.li}>
            <div className={styles.starNcert}>
              <span className={styles.star}>{reviews[r].star} </span>{" "}
              <span className={styles.cert}>{reviews[r].cert}</span>
            </div>
            <div className={styles.id}>id : {reviews[r].id}</div>
            <div className={styles.content}>{reviews[r].content}</div>
            <div className={styles.starNcert}>
              <span className={styles.sta}>리뷰가 도움이 됐나요?</span>{" "}
              <button>도움이 됬어요</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Person;
