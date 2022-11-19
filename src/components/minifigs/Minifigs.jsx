import styles from "./Minifigs.module.css";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();
// https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&key=4a061f1fc0671c55d41c1d3991d185c9

function MinifigData() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&key=4a061f1fc0671c55d41c1d3991d185c9"
    ).then((res) => res.json())
  );

  console.log(data);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

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
