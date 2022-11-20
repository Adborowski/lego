import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import styles from "./FigParts.module.css";

const FigParts = (figData) => {
  const location = useLocation();
  const [figParts, setFigParts] = useState([]);

  const figSetNumber = location.state.selectedFig.set_num;
  const queryString = `https://rebrickable.com/api/v3/lego/minifigs/${figSetNumber}/parts/?key=4a061f1fc0671c55d41c1d3991d185c9&page_size=400`;

  const {
    isLoading,
    error,
    data: partsData,
  } = useQuery("figPartsData", () =>
    fetch(queryString).then((res) => res.json())
  );

  useEffect(() => {
    if (partsData) {
      setFigParts(partsData.results);
      console.log(partsData.results);
    }
  }, [partsData]);

  return (
    <div className={styles.FigParts}>
      <div className={styles.partCount}>
        There are {figParts.length} parts in this minifig:
      </div>
      {figParts.map((figPart) => {
        return (
          <div className={styles.figPart} key={figPart.part.name}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${figPart.part.part_img_url})` }}
            ></div>
            <div className={styles.text}>
              <div className={styles.name}> {figPart.part.name}</div>
              <div className={styles.id}> {figPart.part.part_num}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FigParts;
