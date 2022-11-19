import styles from "./Minifigs.module.css";
import Minifig from "./Minifig";
import { useState } from "react";

const Minifigs = (props) => {
  const [selectedFig, setSelectedFig] = useState();
  const onFigSelection = (set_num) => {
    setSelectedFig(set_num);
  };
  return (
    <div className={styles.Minifigs}>
      {props.figData.map((fig) => {
        return (
          <Minifig
            key={fig.set_num}
            onFigSelection={onFigSelection}
            figData={fig}
          />
        );
      })}
    </div>
  );
};

export default Minifigs;
