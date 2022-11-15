import React from "react";
import styles from "./Nav.module.css";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

function Nav({ setPage }) {
  const [login, setLogin] = useState(false);
  const [auth, setAuth] = useState(false);
  return (
    <header className={styles.nav}>
      <button className={styles.menu}>
        <FiMenu />
      </button>
      <div
        className={styles.logo}
        onClick={() => {
          setPage(1);
        }}
      >
        면허따자
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.qna}
          onClick={() => {
            setPage(3);
          }}
        >
          Q&A
        </button>
        {auth ? null : (
          <>
            <button
              className={styles.login}
              onClick={() => {
                setLogin(true);
              }}
            >
              LOGIN
            </button>
            <button className={styles.sign}>SIGN UP</button>
          </>
        )}
      </div>
      {login && <Login onClose={setLogin} onAuth={setAuth} />}
    </header>
  );
}

function Login({ onClose, onAuth }) {
  const [warn, setWarn] = useState(null);
  const onLogin = (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const pw = e.target[1].value;
    if (pw === "") {
      setWarn("패스워드를 입력하세요");
    }
    if (id === "") {
      setWarn("아이디를 입력하세요");
    }

    if (id === "asdf" && pw === "1234") {
      console.log("login!");
      onAuth(true);
      onClose(false);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => onClose(false)}>
        X
      </button>
      <form action="submit" className={styles.form} onSubmit={onLogin}>
        <input type="text" placeholder="아이디를 입력하세요" />
        <input type="password" placeholder="비밀번호를 입력하세요" />
        <div>{warn}</div>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default Nav;
