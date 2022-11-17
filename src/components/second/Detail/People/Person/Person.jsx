import React from "react";
import { useState } from "react";
import styles from "./Person.module.css";
import Rating from "../Rating/Rating";
import Stars from "../Stars/Stars";
import { useEffect } from "react";

function Person({ name, setTeachers, teachers }) {
  const { img, star, reviews } = teachers[name];
  const [starAvg, setStarAvg] = useState(4.4)
  const [review, setReview] = useState(false);
  useEffect(()=>{
    const starList = Object.keys(teachers[name].reviews).map((r) => Number(reviews[r].star))
    const avg =  starList.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0) / starList.length
    setStarAvg(avg)
  },[])
  return (
    <div className={styles.person}>
      <img className={styles.img} src={img} alt="profile" />
      <div>{name} 강사</div>
      <div className={styles.star}>
        <div>{starAvg.toFixed(1)}</div>
        <Stars num={starAvg} />{" "}
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
          starAvg={starAvg}
          setStarAvg={setStarAvg}
        />
      )}
    </div>
  );
}

function Review({ onClose, name, reviews, setTeachers, teachers, starAvg, setStarAvg }) {
  const [stars, setStars] = useState("3");
  
  const onWReview = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const content = e.target[0].value;
    const id = "asdf";
    const cert = "영수증 인증한 리뷰";
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = year + "." + month + "." + day;
    const newReviews = {
      ...reviews,
      [Date.now()]: { star: stars, cert, id, date, content },
    };
    const starList = Object.keys(teachers[name].reviews).map((r) => Number(reviews[r].star))
    const avg =  starList.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0) / starList.length
    setStarAvg(avg)

    setTeachers(teachers=> ({
      ...teachers,
      [name]: { ...teachers[name], reviews: newReviews },
    }));
  };
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <div className={styles.name}>
        {name} 강사님  <div> <span style={{color:'var(--color-star)'}}> {starAvg.toFixed(1)}</span> <Stars num={starAvg} /></div>
      </div>
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
        <form className={styles.form} action="submit" onSubmit={onWReview}>
          <input type="text" placeholder="나도 후기 작성하기" />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}

export default Person;
