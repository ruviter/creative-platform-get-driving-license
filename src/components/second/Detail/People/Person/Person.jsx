import React from "react";
import { useState } from "react";
import styles from "./Person.module.css";

function Person({ name, setTeachers, teachers }) {
  const imgSrc =
    "https://file.mk.co.kr/meet/neds/2021/07/image_readmed_2021_659579_16257086594710103.jpg";
  const { img, star, reviews } = teachers[name];
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
      {review && (
        <Review
          onClose={setReview}
          name={name}
          reviews={reviews}
          setTeachers={setTeachers}
          teachers={teachers}
        />
      )}
    </div>
  );
}

function Review({ onClose, name, reviews, setTeachers, teachers }) {
  const onWReview = (e) => {
    e.preventDefault();
    const content = e.target.value;
    const star = "★ ★ ★ ★ ★";
    const id = "아이디";
    const cert = "영수증 인증한 리뷰";
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = year + "/" + month + "/" + day;
    const newReviews = {
      ...reviews,
      [Date.now()]: { star, cert, id, date, content },
    };
    console.log(newReviews)
    setTeachers({ ...teachers, [teachers[name]]: { reviews: newReviews } });
  };
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <ul className={styles.ul}>
        <div className={styles.name}>{name} 강사님 - 도로주행 전문</div>
        {Object.keys(teachers[name].reviews).map((r) => (
          <li key={r} className={styles.li}>
            <div className={styles.starNcert}>
              <span className={styles.star}>{reviews[r].star} </span>{" "}
              <span className={styles.cert}>{reviews[r].cert}</span>
            </div>
            <div className={styles.id}>
              id : {reviews[r].id} {reviews[r].date}
            </div>
            <div className={styles.content}>{reviews[r].content}</div>
          </li>
        ))}
      </ul>
      <div className={styles.wreview}>
        <form action="submit" onSubmit={onWReview}>
          <input type="text" placeholder="나도 후기 작성하기" />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}

export default Person;
