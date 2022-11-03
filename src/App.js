import logo from "./logo.svg";
import styles from "./App.module.css";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import FirstPage from "./components/first/FirstPage/FirstPage";

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      {true ? (
        <FirstPage />
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
