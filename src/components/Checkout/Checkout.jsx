import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Minifig from "../minifigs/Minifig";
import FigParts from "../minifigs/FigParts";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const [figParts, setFigParts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state.selectedFig) {
      //   console.log(location.state.selectedFig);
    }
  }, []);

  return (
    <div className={styles.Checkout}>
      <div className={styles.figDisplay}>
        <Minifig figData={location.state.selectedFig} />
        <FigParts figData={location.state.selectedFig} />
      </div>
    </div>
  );
};

export default Checkout;
