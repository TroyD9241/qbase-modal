export const StockCard = ({ stock, index }) => {
  const { name, logo } = stock;
  console.log(index);
  return (
    <div>
      <img src={logo} alt="error" />
      <p>{name} </p>
    </div>
  );
};
