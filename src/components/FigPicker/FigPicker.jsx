import styles from "./Figpicker.module.css";
import Minifig from "/src/components/Minifig/Minifig";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FigPicker = ({ figData }) => {
  //
  const navigate = useNavigate();

  // selectedFig is just the set_num of the fig, not the object
  const [selectedFig, setSelectedFig] = useState("");

  const onFigSelection = (figData) => {
    setSelectedFig(figData);
  };

  const onChoiceConfirmation = () => {
    navigate("/checkout", { state: { selectedFig: selectedFig } });
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
              isActive={selectedFig.set_num == fig.set_num ? true : false}
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
