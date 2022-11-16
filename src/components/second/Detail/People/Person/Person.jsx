import React from "react";
import { useState } from "react";
import styles from "./Person.module.css";
import Rating from "../Rating/Rating";
import Stars from "../Stars/Stars";

function Person({ name, setTeachers, teachers }) {
  const { img, star, reviews } = teachers[name];
  const [review, setReview] = useState(false);
  return (
    <div className={styles.person}>
      <img className={styles.img} src={img} alt="profile" />
      <div>{name} 강사</div>
      <div className={styles.star}>
        {" "}
        <Stars num={star} />{" "}
      </div>
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
  const [stars, setStars] = useState("3");
  const onWReview = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const content = e.target[0].value;
    const star = stars;
    const id = "asdf";
    const cert = "영수증 인증한 리뷰";
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = year + "." + month + "." + day;
    const newReviews = {
      ...reviews,
      [Date.now()]: { star, cert, id, date, content },
    };
    console.log(newReviews);
    setTeachers({
      ...teachers,
      [name]: { ...teachers[name], reviews: newReviews },
    });
  };
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <div className={styles.name}>{name} 강사님 - 도로주행 전문</div>
      <ul className={styles.ul}>
        {Object.keys(teachers[name].reviews).map((r) => (
          <li key={r} className={styles.li}>
            <div className={styles.starNcert}>
              <span className={styles.star}>
                {" "}
                <Stars num={reviews[r].star} />{" "}
              </span>{" "}
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
        <Rating setStar={setStars} />
        <form action="submit" onSubmit={onWReview}>
          <input type="text" placeholder="나도 후기 작성하기" />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}

export default Person;
