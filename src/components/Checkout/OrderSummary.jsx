import Minifig from "../minifigs/Minifig";
import FigParts from "../minifigs/FigParts";
import styles from "./Checkout.module.css";
import { useState, useEffect } from "react";

const OrderSummary = (props) => {
  console.log(props.figData);

  return (
    <div className={styles.figDisplay}>
      <Minifig figData={props.figData} />
      <FigParts figData={props.figData} />
    </div>
  );
};

export default OrderSummary;
