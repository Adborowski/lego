import styles from "./App.module.css";
import Minifigs from "./components/minifigs/minifigs";
const App = () => {
  return (
    <div className={styles.Welcome}>
      <h1 className={styles.headline}>Welcome to Lego Minifig randomizer!</h1>
      <Minifigs />
    </div>
  );
};

export default App;
