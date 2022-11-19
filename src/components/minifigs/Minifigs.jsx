import styles from "./Minifigs.module.css";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();
import { useParams } from "react-router-dom";
import Minifig from "./Minifig";

const Minifigs = (props) => {
  const MinifigData = () => {
    const [redirect, setRedirect] = useState();
    const onFigSelection = (setId) => {
      setRedirect(setId);
      console.log(setId);
    };

    const { isLoading, error, data } = useQuery("repoData", () =>
      fetch(
        "https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&key=4a061f1fc0671c55d41c1d3991d185c9&page_size=400"
      ).then((res) => res.json())
    );

    const [randomMinifigs, setRandomMinifigs] = useState([]);
    let howManyMinifigs = 3; // how many random figs do we want (default 3)

    // set random minifigs
    useEffect(() => {
      if (data) {
        setRandomMinifigs([]);
        let allMinifigs = data.results;

        // filter out the minifigs without an image
        let filteredMinifigs = allMinifigs.filter(
          (minifig) => minifig.set_img_url !== null
        );

        // set the 3 random minifigs from the filtered set
        for (let i = 0; i < howManyMinifigs; i++) {
          setRandomMinifigs((randomMinifigs) => [
            ...randomMinifigs,
            filteredMinifigs[
              Math.floor(Math.random() * filteredMinifigs.length)
            ],
          ]);
        }
      }
    }, [data]);

    useEffect(() => {
      console.log(randomMinifigs);
    }, [randomMinifigs]);

    return randomMinifigs.map((randomMinifig) => (
      <Minifig key={randomMinifig.name} figData={randomMinifig} />
    ));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.Minifigs}>
        <MinifigData />
      </div>
    </QueryClientProvider>
  );
};

export default Minifigs;
