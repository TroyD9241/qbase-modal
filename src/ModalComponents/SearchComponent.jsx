import { StockCard } from "../StockCard/StockCard";

const stockInfo = [
  {
    ticker: "AAPL",
    price: "200.22",
    trend: "+2.3%",
    logo: "https://s3-symbol-logo.tradingview.com/amazon--600.png",
  },
  {
    ticker: "GGL",
    price: "300",
    trend: "+3.4%",
    logo: "https://thumbs.dreamstime.com/z/google-logo-white-background-vector-format-available-google-logo-124289805.jpg",
  },
];

// we destructure out the searchText, onChange(which trigger the setSearchText), and onClick(which triggers the setActiveAsset)
export const SearchComponent = ({ searchText, onChange, onClick }) => {
  return (
    <>
      <div id="search-bar">
        <input
          placeholder="Search"
          type="text"
          name="s"
          onChange={onChange}
        ></input>
      </div>
      {stockInfo
        .filter((stock) => {
          if (searchText === "") {
            return stock;
          } else if (
            stock?.ticker
              .toString()
              .toLowerCase()
              .includes(searchText?.toLowerCase())
          ) {
            return stock;
          }
        })
        .map((stock, index) => {
          return (
            <button onClick={() => onClick(stock)}>
              <StockCard stock={stock} key={index} />;
            </button>
          );
        })}
    </>
  );
};
