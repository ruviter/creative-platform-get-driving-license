import logo from './logo.svg';
import styles from './App.module.css'
import Nav from './components/Nav/Nav';
import Map from './components/Map/Map';
import List from './components/List/List';

function App() {
  return (
    <div className={styles.App}>
      <Nav/>
      <section className={styles.section}>
      <Map/>
      <List/>

      </section>
    </div>
  );
}

export default App;
