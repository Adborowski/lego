import styles from "./Minifigs.module.css";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();
// https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&key=4a061f1fc0671c55d41c1d3991d185c9

const MinifigData = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&key=4a061f1fc0671c55d41c1d3991d185c9&page_size=400"
    ).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      console.log(data.results);
    }
  }, [data]);

  return <div>a</div>;
};

const Minifigs = () => {
  console.log("Start");

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.Minifigs}>
        <MinifigData />
      </div>
    </QueryClientProvider>
  );
};

export default Minifigs;
