import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  return <h1>Selected set: {location.state.set_num}</h1>;
};

export default Checkout;
