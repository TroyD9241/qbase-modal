import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BuyComponent } from "../ModalComponents/BuyComponent";
import { SellComponent } from "../ModalComponents/SellComponent";
import { SearchComponent } from "../ModalComponents/SearchComponent";
import { BuyReviewComponent } from "../ModalComponents/BuyReviewComponent";
import { SellReviewComponent } from "../ModalComponents/SellReviewComponent";

// created an open that references each component based on a key word.
// another option here is a switch statement
const modalComponentMap = {
  BUY: BuyComponent,
  SELL: SellComponent,
  SEARCH: SearchComponent,
  BUYREVIEW: BuyReviewComponent,
  SELLREVIEW: SellReviewComponent,
};

export const ComponentModal = ({ show }) => {
  // the modal inherits the {show} prop from the parent Navbar
  // show allows us to inherit the rendering state of the modal for usage with conditionals
  const [searchText, setSearchText] = useState("");
  // search text is a state that is needed to implement the search feature. saving the typed values.
  const [activeAsset, setActiveAsset] = useState(null);
  // active asset is a state that allows us to have access to the selected stock/crypto throughout the modal
  const root = document.getElementById("modal-root");
  // root allows us to grab the modal-root which is in parallel to the app-root allowing the modal to be created outside of the scope of the app.
  const [activeComponent, setActiveComponent] = useState("BUY");
  // active component is the state that allows us to switch between states in the modal.
  const Component = modalComponentMap[activeComponent];
  // here we are creating a new Component variable that will allow us to render any component from the list below. Thank you bind
  if (root) {
    // make a conditonal check to make sure there is indeed a modal-root
    return ReactDOM.createPortal(
      <div className="">
        {show ? (
          <div className="mx-auto p-5 border w-96 shadow-lg rounded-md bg-orange-100 ">
            <div className="tabs" class="flex justify-between">
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

              <button
                className="flex items-center h-12 px-4 py-2 text-md text-center text-orange-500
                            border-b-0 border-orange-500 sm:text-base dark:border-orange-500 rounded-t-md
                            dark:orange-500 whitespace-nowrap focus:outline-none"
                onClick={setActiveComponent.bind(null, "SEARCH")}
              >
                Stock
              </button>
            </div>

            {/*
            <button onClick={setActiveComponent.bind(null, "BUYREVIEW")}>
              Purchase
            </button>
            {}
            <button onClick={setActiveComponent.bind(null, "SELLREVIEW")}>
              Sell
            </button> */}
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

/*
there is a lot going on here, and jsx is no fun and makes commenting a pain.
line 33: we are using react's createPortal. Create portal allows us to render children that exist outside of the DOM parent component.
if the show button is a truthy value we will render the content of this component.

you'll see usage of the .bind() method quite a bit. Bind creates a new function which has its keyword set to the a provided value. So we take this setActiveComponent
bind null to the new funciton replacing the previous value with whatever the 2nd value passed in is

on line 77 we render our Component passing down props that allow us to use these values in all of our components no matter which is rendered. onClick | onChange are callbacks that allow us to
update the value in their respected Component (search)
*/
