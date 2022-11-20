import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Checkout = () => {
  const location = useLocation();
  const { isLoading, error, data } = useQuery("minifigData", () =>
    fetch(
      "https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&key=4a061f1fc0671c55d41c1d3991d185c9&page_size=400"
    ).then((res) => res.json())
  );
  console.log(location.state);
  return <h1>Selected set:</h1>;
};

export default Checkout;
