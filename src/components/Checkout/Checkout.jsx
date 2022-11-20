import { useLocation } from "react-router-dom";
import styles from "./Checkout.module.css";
import OrderSummary from "./OrderSummary";
import ShippingForm from "./ShippingForm";

const Checkout = () => {
  const location = useLocation();
  console.log(location.state.selectedFig);

  return (
    <div className={styles.Checkout}>
      <ShippingForm />
      <OrderSummary figData={location.state.selectedFig} />
    </div>
  );
};

export default Checkout;
