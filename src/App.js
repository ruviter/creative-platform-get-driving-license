import logo from "./logo.svg";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import FirstPage from "./components/first/FirstPage/FirstPage";
import { useState } from "react";
import Detail from "./components/Detail/Detail";
import Compare from "./components/Compare/Compare";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.App}>
      <Nav />
      {page === 1 ? <FirstPage onNextPage={setPage} /> : <SecPage />}
    </div>
  );
}

function SecPage() {
  const [detail, setDetail] = useState(false);
  const [compare, setCompare] = useState(false)
  return (
    <section className={styles.section}>
      {detail ? (
        <div className={styles.detail}>
          <Detail />
        </div>
      ) : (
        <>
          <div className={styles.map}>
            <Map />
          </div>
          <List onDetail={setDetail} onCompare={setCompare} />
        </>
      )}
      {compare && <Compare setModalOpen={setCompare} />}
    </section>
  );
}

export default App;
