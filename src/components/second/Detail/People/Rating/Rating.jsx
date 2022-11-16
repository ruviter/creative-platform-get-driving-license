import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Rating.module.css";

const ARRAY = [ 1, 2, 3, 4,5];

function Rating({ setStar }) {
  const [hovered, setHovered] = useState(-1);
  const [clicked, setClicked] = useState(null);

  const handleClick = (e) => {
    setClicked((clicked)=>hovered);
    setStar(clicked)
  };
  return (
    <div className={styles.rating}>
      {ARRAY.map((el) => (
        <span
          className={
            //el만큼 클릭 하거나 || el만큼 호버를 하면 yellowStar 클래스를 실행
            (hovered >= el) ? styles.yellowStar : null
          }
          style={(hovered >= el)|| (clicked >= el) ? {color:'red'} : null}
          key={el} //1,2,3,4,5
          id={el}
          onMouseEnter={() => setHovered(el)}
          onMouseLeave={() => setHovered(-1)}
          onClick={handleClick}
        >
            <FaStar/>
        </span>
      ))}
    </div>
  );
}

export default Rating;
