import React from "react";
import styles from "./Route.module.css";
import route from '../../../img/route.png'

function Route(props) {
  return (
    <div>
      <div className={styles.title}>가는 경로</div>
      <img
        className={styles.img}
        src={route}      />
    </div>
  );
}

export default Route;
