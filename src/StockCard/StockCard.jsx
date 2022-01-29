export const StockCard = ({ stock, index }) => {
  const { name, logo } = stock;

  return (
    <div>
      <img src={logo} alt="error" />
      <p>{name} </p>
    </div>
  );
};
