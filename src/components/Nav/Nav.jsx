import React from "react";
import styles from "./Nav.module.css";
import { FiMenu } from "react-icons/fi";

function Nav({setPage}) {
  return (
    <header className={styles.nav}>
      <button className={styles.menu}>
        <FiMenu />
      </button>
      <div className={styles.logo}>면허따자</div>
      <div className={styles.buttons}>
        <button className={styles.qna} onClick={()=>{setPage(3)}}>Q&A</button>
        <button className={styles.login}>LOGIN</button>
        <button className={styles.sign}>SIGN UP</button>
      </div>
    </header>
  );
}

export default Nav;
