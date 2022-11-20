import Minifig from "../minifigs/Minifig";
import FigParts from "../minifigs/FigParts";
import styles from "./Checkout.module.css";
import { useState, useEffect } from "react";

const OrderSummary = (props) => {
  console.log(props.figData);

  return (
    <div className={styles.OrderSummary}>
      <h2>Order Summary</h2>
      <Minifig figData={props.figData} onFigSelection={() => {}} />
      <FigParts figData={props.figData} />
    </div>
  );
};

export default OrderSummary;
