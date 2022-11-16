import { useState } from "react";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import SecondPage from "./components/second/SecondPage/SecondPage";
import Qna from "./components/Qna/Qna";


function App() {
  const [page, setPage] = useState(2);

  return (
    <div className={styles.App}>
      <Nav setPage={setPage} />
      {page === 2 ? (
        <SecondPage/>
      ) : (
        <Qna />
      )}
    </div>
  );
}

export default App;
