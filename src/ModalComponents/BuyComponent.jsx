import { useState } from "react";

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

export const BuyComponent = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div id="account-buttons">
      <div class="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
          <button class="w-full px-4 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            {accounts[0].name}
          </button>

          <button class="w-full px-4 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
            {assetList[0].name}
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
        <button>10</button>
        <button>25</button>
        <button>50</button>
        <button>100</button>
      </div>

      <div id="stock-info">Stock dropdown</div>

      <div id="footer" className="bg-red-500">
        <p>
          {balance[0].name}

          {balance[0].amount}
        </p>
      </div>
    </div>
  );
};
