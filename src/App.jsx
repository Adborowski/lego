import styles from "./App.module.css";
import FigPicker from "./components/FigPicker/FigPicker";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  // query Rebrickable for the minifig data
  // theme 246 is Harry Potter (363 items)
  const { isLoading, error, data } = useQuery("minifigData", () =>
    fetch(
      "https://rebrickable.com/api/v3/lego/minifigs/?in_theme_id=246&key=4a061f1fc0671c55d41c1d3991d185c9&page_size=400"
    ).then((res) => res.json())
  );

  const [randomMinifigs, setRandomMinifigs] = useState([]);
  let howManyMinifigs = 3; // how many random figs do we want (default 3)

  // when the data is ready
  useEffect(() => {
    if (data) {
      setRandomMinifigs([]);
      let allMinifigs = data.results;

      // filter out minifigs without an image
      let filteredMinifigs = allMinifigs.filter(
        (minifig) => minifig.set_img_url !== null
      );

      // pick 3 random minifigs from the filtered set
      for (let i = 0; i < howManyMinifigs; i++) {
        setRandomMinifigs((randomMinifigs) => [
          ...randomMinifigs,
          filteredMinifigs[Math.floor(Math.random() * filteredMinifigs.length)],
        ]);
      }
    }
  }, [data]);

  // log the randomized minifigs when they're ready
  useEffect(() => {
    // console.log(randomMinifigs);
  }, [randomMinifigs]);

  // pass the data down to FigPicker
  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <h1 className={styles.headline}>Choose your minifig</h1>
        <FigPicker figData={randomMinifigs} />
      </div>
    </div>
  );
};

export default App;
