import styles from "./Minifigs.module.css";
import Minifig from "./Minifig";
import { useState, useEffect } from "react";

const Minifigs = ({ figData }) => {
  const [selectedFig, setSelectedFig] = useState("");

  const onFigSelection = (set_num) => {
    setSelectedFig(set_num);
  };

  useEffect(() => {
    console.log(selectedFig);
  }, [selectedFig]);
  //
  return (
    <div className={styles.Minifigs}>
      {figData.map((fig) => {
        return (
          <Minifig
            isActive={selectedFig == fig.set_num ? true : false}
            key={fig.set_num}
            activeFig={selectedFig}
            onFigSelection={onFigSelection}
            figData={fig}
          />
        );
      })}
    </div>
  );
};

export default Minifigs;
