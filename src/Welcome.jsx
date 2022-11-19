import styles from "./App.module.css";
import Minifigs from "./components/minifigs/Minifigs";
import { useState } from "react";
const App = () => {
  const [selectedSetId, setSelectedSetId] = useState();

  const onFigSelection = (setId) => {
    console.log(setId);
  };

  return (
    <div className={styles.Welcome}>
      <h1 className={styles.headline}>Welcome to Lego Minifig randomizer!</h1>
      <Minifigs onFigSelection={onFigSelection} />
    </div>
  );
};

export default App;
