import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BuyComponent } from "../ModalComponents/BuyComponent";
import { SellComponent } from "../ModalComponents/SellComponent";
import { SearchComponent } from "../ModalComponents/SearchComponent";
import { BuyReviewComponent } from "../ModalComponents/BuyReviewComponent";
import { SellReviewComponent } from "../ModalComponents/SellReviewComponent";

const modalComponentMap = {
  BUY: BuyComponent,
  SELL: SellComponent,
  SEARCH: SearchComponent,
  BUYREVIEW: BuyReviewComponent,
  SELLREVIEW: SellReviewComponent,
};

export const ComponentModal = ({ show }) => {
  const [searchText, setSearchText] = useState("");
  const [activeAsset, setActiveAsset] = useState(null);
  const root = document.getElementById("modal-root");
  const [activeComponent, setActiveComponent] = useState("BUY");
  const Component = modalComponentMap[activeComponent];
  if (root) {
    return ReactDOM.createPortal(
      <div>
        {show ? (
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-orange-100">
            <div className="tabs" class="flex">
              <button
                class="flex items-center h-12 px-4 py-2 text-md text-center text-orange-500
                        border-b-0 border-orange-500 sm:text-base dark:border-orange-500 rounded-t-md
                        dark:orange-500 whitespace-nowrap focus:outline-none
                            "
                onClick={setActiveComponent.bind(null, "BUY")}
              >
                Buy
              </button>

              <button
                class="flex items-center h-12 px-4 py-2 text-md text-center text-orange-500
                            border-b-0 border-orange-500 sm:text-base dark:border-orange-500 rounded-t-md
                            dark:orange-500 whitespace-nowrap focus:outline-none
                                "
                onClick={setActiveComponent.bind(null, "SELL")}
              >
                Sell
              </button>
            </div>

            <button onClick={setActiveComponent.bind(null, "SEARCH")}>
              TickerInfo
            </button>

            <button onClick={setActiveComponent.bind(null, "BUYREVIEW")}>
              Purchase
            </button>

            <button onClick={setActiveComponent.bind(null, "SELLREVIEW")}>
              Sell
            </button>
            <Component
              searchText={searchText}
              activeAsset={activeAsset}
              onClick={(value) => setActiveAsset(value)}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
          </div>
        ) : null}
      </div>,
      root
    );
  } else {
    return null;
  }
};
