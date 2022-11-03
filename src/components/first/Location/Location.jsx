import React from "react";
import styles from "./Location.module.css";

function Location(props) {
  return (
    <div className={styles.container}>
      <div className={styles.que}>어디에 거주중이신가요?</div>
      <p>거주하시는 곳과 가까운 학원을 찾아드려요</p>
      <form className={styles.form} action="submit">
        <input className={styles.input} type="text" />
        <button className={styles.button}>현재위치로 설정</button>
      </form>
    </div>
  );
}

export default Location;
