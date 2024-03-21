import React, { useEffect, useState } from "react";
import CreateCard from "./CreateCard";
// import Grid from "@mui/material/Grid";

const TopTenSection = () => {
  const [cardData, setCardData] = useState(null);
  useEffect(function () {
    async function fetchTopTen() {
      const res = await fetch(
        `https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=8`
      );
      const data = await res.json();
      console.log(data);
      setCardData(data);
    }
    fetchTopTen();
  }, []);
  return <div>{<CreateCard cardInfo={cardData} />}</div>;
};

export default TopTenSection;
