import React from "react";
import styles from "./People.module.css";
import Person from "./Person/Person";

function People(props) {
  return (
    <>
      <div className={styles.title}>강사정보</div>
      <div className={styles.people}>
        {inf.map((p) => (
          <Person inf={p} />
        ))}
      </div>
    </>
  );
}
const inf = [
  {
    img: "https://mblogthumb-phinf.pstatic.net/20150122_225/zikil337_1421903667630tY9OM_JPEG/1406712927189_1406709118496-1.jpg?type=w2",
    name: "우민혁",
    star: "★ ★ ★ ★ ★",
  },
  {
    img: "https://mblogthumb-phinf.pstatic.net/20150122_225/zikil337_1421903667630tY9OM_JPEG/1406712927189_1406709118496-1.jpg?type=w2",
    name: "심준석",
    star: "★ ★ ★ ★ ★",
  },
  {
    img: "https://mblogthumb-phinf.pstatic.net/20150122_225/zikil337_1421903667630tY9OM_JPEG/1406712927189_1406709118496-1.jpg?type=w2",
    name: "김선혁",
    star: "★ ★ ★ ★ ★",
  },
  {
    img: "https://mblogthumb-phinf.pstatic.net/20150122_225/zikil337_1421903667630tY9OM_JPEG/1406712927189_1406709118496-1.jpg?type=w2",
    name: "김한식",
    star: "★ ★ ★ ★ ★",
  },
];

export default People;
