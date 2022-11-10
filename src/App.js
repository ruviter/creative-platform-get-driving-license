import { useState } from "react";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import FirstPage from "./components/first/FirstPage/FirstPage";
import SecondPage from "./components/second/SecondPage/SecondPage";
import Qna from "./components/Qna/Qna";


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

export default App;
