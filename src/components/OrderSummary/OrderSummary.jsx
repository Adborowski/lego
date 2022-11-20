import Minifig from "../Minifig/Minifig";
import FigParts from "../FigParts/FigParts";
import styles from "./OrderSummary.module.css";
import { useState, useEffect } from "react";

const OrderSummary = (props) => {
  // console.log(props.figData);

  return (
    <div className={styles.OrderSummary}>
      <h2>Order Summary</h2>
      <Minifig figData={props.figData} onFigSelection={() => {}} />
      <FigParts figData={props.figData} />
    </div>
  );
};

export default OrderSummary;
