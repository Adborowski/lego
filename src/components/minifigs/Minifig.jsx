import { useState, useEffect } from "react";
import styles from "./Minifigs.module.css";

const Minifig = ({ onFigSelection, figData, isActive }) => {
  return (
    <div
      onClick={() => {
        onFigSelection(figData.set_num);
      }}
      className={`${styles.randomMinifig} ${isActive ? styles.active : ""}`}
      key={figData.name}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${figData.set_img_url})` }}
      ></div>
      <div className={styles.name}>{figData.name}</div>
    </div>
  );
};

export default Minifig;
