import React from "react";
import styles from "./License.module.css";
function License(props) {
  return (
    <div>
      <div className={styles.que}>어떤 면허로 따시겠어요?</div>
      <p>딱 맞는 학원으로 알아봐드릴게요</p>
      <div className={styles.buttons}>
        <button className={styles.j1}>1종 운전면허</button>
        <button className={styles.j2}>2종 운전면허</button>
      </div>
    </div>
  );
}

export default License;
