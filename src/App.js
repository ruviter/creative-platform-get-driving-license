import logo from "./logo.svg";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import FirstPage from "./components/first/FirstPage/FirstPage";
import { useState } from "react";
import Detail from "./components/Detail/Detail";

function App() {
  const [page, setPage] = useState(1)
  const [detail, setDetail] = useState(false)

  return (
    <div className={styles.App}>
      <Nav />
      {page===1 ? (
        <FirstPage onNextPage={setPage}/>
      ) : (
      
        <>
          <section className={styles.section}>
          <div className={styles.dm}>
            {detail?<Detail />:<Map />}
            </div>
            <List onDetail={setDetail}/>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
