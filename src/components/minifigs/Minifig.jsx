import { useState } from "react";
import styles from "./Minifigs.module.css";

const Minifig = ({ figData }) => {
  const [isActive, setIsActive] = useState(false);

  console.log(figData);
  return (
    <div
      onClick={() => {
        onFigSelection(figData.set_num);
        setIsActive(!isActive);
      }}
      className={`${styles.randomMinifig} ${isActive ? styles.active : ""}`}
      key={figData.name}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${figData.set_img_url})` }}
      ></div>
      <div className={styles.name}>{figData.name}</div>
      <div className={styles.controls}></div>
    </div>
  );
};

export default Minifig;
