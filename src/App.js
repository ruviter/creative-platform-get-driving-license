import logo from "./logo.svg";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import FirstPage from "./components/first/FirstPage/FirstPage";
import { useState } from "react";

import Qna from "./components/Qna/Qna";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import SecondPage from "./components/second/SecondPage/SecondPage";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.App}>
      <Nav setPage={setPage} />
      {page === 1 ? (
        <FirstPage onNextPage={setPage} />
      ) : page === 2 ? (
        <SecondPage/>
      ) : (
        <Qna />
      )}
    </div>
  );
}

function SecPage() {
  const [detail, setDetail] = useState(false);
  const [compare, setCompare] = useState(false);
  return (
    <section className={styles.section}>
         </section>
  );
}

export default App;
