import React from "react";
import styles from "./Map.module.css";
import map from '../../img/map.png'

function Map(props) {
  return (
    <div className={styles.map}>
      <img
        className={styles.img}
        style={{ display: "block" }}
        src={map}
      />
    </div>
  );
}

export default Map;
