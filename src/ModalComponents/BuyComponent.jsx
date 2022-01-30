import { useState, useEffect } from "react";

// two objects i created to act as static props
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
//

export const BuyComponent = ({ activeAsset }) => {
  // in the buy component we need to destructure the activeAsset passed from the ComponentModal
  // this gives us access to the selected asset's state.
  const [account, setAccount] = useState(userInfo[0]);
  // this is not working as I want. It's a bit difficult to manage this kind of state without context or redux
  // this should allow us to update the user based on their selection in the select menu line:56
  // currently works to an extent but need to spend more time debugging
  const [inputAmount, setInputAmount] = useState(0);
  // input amount is simply the entered interger that represents the amount of money they want to use
  // inputAmount should be passed down to component that renders a purchase component. I'm not sure if this is correcly placed in this component or should be lifted
  const [showDropDown, setShowDropDown] = useState(false);
  // showDropDown will render the currentAssets info by clicking a button.

  // useEffect(() => {
  //   // let userObject = userInfo.find((user) => account === user.id);
  // });

  // const findUser = (userArray, account) => {
  //   const userObject = userArray.find((user) => account === user.id);
  //   setAccount(userObject);
  //   return;
  // };

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  // here is just a simple function like the modal one that changes the state to the opposite of the current state.

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

/*
this component is a bit of a mess imo. I think as I was working through problems I had to make consistent changes to the the strucuture.
*/
