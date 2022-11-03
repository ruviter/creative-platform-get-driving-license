import React from "react";
import styles from "./Map.module.css";

function Map(props) {
  return (
    <div className={styles.map}>
      <img
        className={styles.img}
        src="https://velog.velcdn.com/images%2Fminn602%2Fpost%2Fb49932ff-9d9c-4711-a4df-73f2e6111fc4%2Fimage.png"
      />
    </div>
  );
}

export default Map;
