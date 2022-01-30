import { useState } from "react";

/*
This component is very similar to the BuyComponent with almost no differences outside of not being entirely finished/fleshed out.
*/

const userInfo = [
  {
    name: "troy",
    amount: 100,
  },
  {
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

export const SellComponent = ({ activeAsset }) => {
  const [account, setAccount] = useState(userInfo[0]);
  const [inputAmount, setInputAmount] = useState(0);

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
              return <option value={user.index}>{user.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div id="account-selector" className="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select
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
      <div id="input-amount">
        <input
          onChange={(event) => setInputAmount(event.target.value)}
          className="bg-transparent border-dashed w-full p-5"
          placeholder="$0"
          type="number"
          onSelect={(event) => setAccount(event.target.value)}
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

      <div id="footer" className="bg-orange-100 mt-4 flex items-center">
        <p>
          {account.name} has ${account.amount}
        </p>
        <p></p>
      </div>
    </div>
  );
};
