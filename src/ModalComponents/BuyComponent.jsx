import { useState, useEffect } from "react";

const userInfo = [
  {
    id: 1,
    name: "troy",
    amount: 100,
  },
  {
    id: 2,
    name: "demo",
    amount: 200,
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

export const BuyComponent = ({ activeAsset }) => {
  const [account, setAccount] = useState(userInfo[0]);
  const [inputAmount, setInputAmount] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    // let userObject = userInfo.find((user) => account === user.id);
  });

  // const findUser = (userArray, account) => {
  //   const userObject = userArray.find((user) => account === user.id);
  //   setAccount(userObject);
  //   return;
  // };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div id="buy-comp-container" className="">
      <div id="account-selector" className="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select
            onChange={(event) => setAccount(event.target.value)}
            type="select"
            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value>Accounts...</option>
            {Object.values(userInfo).map((user, index) => {
              return <option value={user.id}>{user.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div id="account-selector" className="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select
            onSelect={(event) => setAccount(event.target.value)}
            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value>Asset Type...</option>
            {Object.values(assetList).map((account) => {
              return <option value={assetList.name}>{account.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div id="input-amount " className="flex">
        <input
          className="bg-transparent border-dashed w-full p-5"
          placeholder="$0"
          type="number"
          onChange={(event) => setInputAmount(event.target.value)}
        ></input>
      </div>

      <div id="limitations">
        <div
          id="button-container"
          className="bg-orange-100 flex justify-around"
        >
          <button class="bg-orange-400 rounded-md w-12">10</button>
          <button class="bg-orange-400 rounded-md w-12">25</button>
          <button class="bg-orange-400 rounded-md w-12">50</button>
          <button class="bg-orange-400 rounded-md w-12">100</button>
        </div>
      </div>

      <button
        id="stock-info"
        className="bg-orange-500 rounded-lg w-full border-2 mt-10 "
        onClick={() => toggleDropDown()}
      >
        stock Info
      </button>

      {showDropDown ? (
        <>
          <div>
            <p>Ticker: {activeAsset?.ticker}</p>
            <p>Current Price: {activeAsset?.price}</p>
            <p>Trend: {activeAsset?.trend}</p>
          </div>
        </>
      ) : null}

      <div id="footer" className="bg-orange-100 mt-4 flex items-center">
        <p>
          {account?.name} has ${account?.amount}
        </p>
        <p></p>
      </div>
    </div>
  );
};
