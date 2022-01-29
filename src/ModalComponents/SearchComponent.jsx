import { useState } from "react";
import { StockCard } from "../StockCard/StockCard";

const stockTicker = [
  {
    name: "GGGL",
    logo: "https://blog.hubspot.com/hubfs/image8-2.jpg",
  },
  {
    name: "AMZ",
    logo: "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",
  },
];

export const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div id="search-bar">
        <input
          placeholder="Search"
          type="text"
          name="s"
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
      </div>
      {stockTicker
        .filter((stock) => {
          if (searchText === "") {
            return stock;
          } else if (
            stock.name
              .toString()
              .toLowerCase()
              .includes(searchText.toLowerCase())
          ) {
            return stock;
          }
        })
        .map((stock, index) => {
          return <StockCard stock={stock} index={index} />;
        })}
    </>
  );
};
