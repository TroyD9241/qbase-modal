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
      <div id="asset-selector" className="relative inline-block">
        <button
          class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md
            dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300
            dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
          onClick={() => toggle()}
        >
          {assetList[0].name}
        </button>
        {openMenu ? (
          <div class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
            <a
              href="#"
              class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {" "}
              your profile{" "}
            </a>
          </div>
        ) : null}
        <button
          class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md
            dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300
            dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
          onClick={() => toggle()}
        >
          {accounts[0].name}
        </button>
      </div>

      <div id="input-amount">
        <input placeholder="$0"></input>
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
