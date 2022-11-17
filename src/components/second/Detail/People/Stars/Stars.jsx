import React, { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";

const ARRAY = [1, 2, 3, 4, 5];

function Stars({ num }) {
  return (
    <span style={{ color: "gray" }}>
      {ARRAY.map((el) => (
        <span
          style={num >= el ? { color: "var(--color-star)" } : null}
          key={el}
          id={el}
        >
          <BsFillStarFill />{" "}
        </span>
      ))}
    </span>
  );
}

export default Stars;
