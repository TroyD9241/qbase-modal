import { useState } from "react";
import { InfoCard } from "../InfoCard/InfoCard";

const accounts = [
  {
    name: "troy",
  },

  {
    name: "demo",
  },
];

const balance = [
  {
    name: "troy",
    amount: 100,
  },
];
const assetList = [
  {
    name: "Stock",
  },
  {
    name: "Crypto",
  },
];

const stockInfo = [
  {
    ticker: "AAPL",
    price: "200.22",
    trend: "+2.3%",
  },
  {
    ticker: "GGL",
    price: "300",
    trend: "+3.4%",
  },
];

export const BuyComponent = ({ activeAsset }) => {
  const [inputAmount, setInputAmount] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <div id="account-buttons" className="">
      <div class="flex items-center p-1.5 w-full overflow-hidden bg-gray-700 border rounded-sm">
        <div class="flex items-center p-1.5 w-full overflow-hidden rounded-lg dark:bg-orange-100 flex justify-evenly ">
          <button class="w-20 py-1 mr-5 text-white transition-colors duration-200 transform bg-orange-600 rounded-md focus:outline-none  hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            stuff
          </button>
          <button class="w-20 px-4 py-1 text-white transition-colors duration-200 transform bg-orange-600 rounded-md focus:outline-none hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            stuff
          </button>
        </div>
      </div>
      <div id="input-amount">
        <input
          placeholder="$0"
          type="number"
          onChange={(event) => setInputAmount(event.target.value)}
        ></input>
      </div>

      <div id="limitations">
        <p>min amount feefw</p>
        <div id="button-container" className="bg-red-200 flex justify-around">
          <button>10</button>
          <button>25</button>
          <button>50</button>
          <button>100</button>
        </div>
      </div>

      <button
        id="stock-info"
        className="bg-green-300 rounded-lg w-full"
        onClick={() => toggleDropDown()}
      >
        stock Info
      </button>

      {showDropDown ? (
        <>
          <div>
            <p>{activeAsset.name}</p>
            <p>{}</p>
            <p>{stockInfo[0].trend}</p>
          </div>
        </>
      ) : null}

      <div id="footer" className="bg-red-500 flex items-center">
        <p> {balance[0].name} </p>
        <p>{balance[0].amount}</p>
      </div>
    </div>
  );
};
