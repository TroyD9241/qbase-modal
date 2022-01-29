export const StockCard = ({ stock, index }) => {
  const { name, logo } = stock;
  console.log(index);
  return (
    <button>
      <img src={logo} alt="error" />
      <p>{name} </p>
    </button>
  );
};
