import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

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

  return figParts.map((figPart) => {
    return <div key={figPart.part.name}>{figPart.part.name}</div>;
  });
};

export default FigParts;
