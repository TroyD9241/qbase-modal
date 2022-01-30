export const StockCard = ({ stock, index }) => {
  return (
    <div className="flex flex-col ">
      <p>{stock?.ticker} </p>
      <img src={stock?.logo} width={"100%"} alt="error" />
    </div>
  );
};
