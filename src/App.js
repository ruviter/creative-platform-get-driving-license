import logo from "./logo.svg";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import FirstPage from "./components/first/FirstPage/FirstPage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1)

  return (
    <div className={styles.App}>
      <Nav />
      {page===1 ? (
        <FirstPage onNextPage={setPage}/>
      ) : (
        <>
          <section className={styles.section}>
            <Map />
            <List />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
