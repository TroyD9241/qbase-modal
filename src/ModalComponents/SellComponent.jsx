import { useState } from "react";

export const SellComponent = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div id="account-buttons">
      <div class="flex items-center p-1.5 w-full overflow-hidden rounded-lg dark:bg-orange-100 flex justify-evenly ">
        <button class="w-20 py-1 mr-5 text-white transition-colors duration-200 transform bg-orange-600 rounded-md focus:outline-none  hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
          stuff
        </button>
        <button class="w-20 px-4 py-1 text-white transition-colors duration-200 transform bg-orange-600 rounded-md focus:outline-none hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
          stuff
        </button>
      </div>

      <div id="input-amount" className="flex justify-center  bg-green-400 ">
        <input className="" type="number" placeholder="$0"></input>
      </div>

      <div id="limitations" className="bg-green-600 flex justify-center">
        <p>min amount feefw</p>
        <div id="button-container" className="">
          <button>10</button>
          <button>25</button>
          <button>50</button>
          <button>100</button>
        </div>
      </div>

      <div id="stock-info">Stock dropdown</div>

      <div id="footer" className="bg-red-500">
        <p>hi</p>
      </div>
    </div>
  );
};
