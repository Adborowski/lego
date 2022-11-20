import styles from "./Minifigs.module.css";
import Minifig from "./Minifig";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FigPicker = ({ figData }) => {
  //
  const navigate = useNavigate();
  const [selectedFig, setSelectedFig] = useState("");

  const onFigSelection = (set_num) => {
    setSelectedFig(set_num);
  };

  const onChoiceConfirmation = () => {
    navigate("/checkout", { state: { set_num: 5 } });
  };

  useEffect(() => {
    console.log(selectedFig);
  }, [selectedFig]);
  //
  return (
    <div className={styles.FigPicker}>
      <div className={styles.minifigs}>
        {figData.map((fig) => {
          return (
            <Minifig
              isActive={selectedFig == fig.set_num ? true : false}
              key={fig.set_num}
              onFigSelection={onFigSelection}
              figData={fig}
            />
          );
        })}
      </div>
      <div className={`${styles.controls}`}>
        <button onClick={onChoiceConfirmation} disabled={!selectedFig}>
          Choose
        </button>
      </div>
    </div>
  );
};

export default FigPicker;
