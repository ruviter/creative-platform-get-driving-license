import React, { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";

const ARRAY = [0, 1, 2, 3, 4];

function Stars({ num }) {
  return (
    <div style={{ color: "gray" }}>
      {ARRAY.map((el) => (
        <span
          style={num >= el ? { color: "var(--color-star)" } : null}
          key={el}
          id={el}
        >
          <BsFillStarFill />{" "}
        </span>
      ))}
    </div>
  );
}

export default Stars;
