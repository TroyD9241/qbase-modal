import { useState } from "react";
import { ComponentModal } from "../ComponentModal/ComponentModal";

export const Navbar = () => {
  const [modal, setModal] = useState(false);
  // modal is simply that the state of the modal can either be true (showing), or false (not showing)
  const toggle = () => setModal(!modal);
  // the toggle function allows us to easily set the state of the modal to be the opposite of its current state
  return (
    <>
      <nav class="bg-white shadow dark:bg-slate-100">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <button
            class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-orange-300 rounded-md hover:bg-orange-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            onClick={() => toggle()}
          >
            Buy & Sell
          </button>
        </div>
      </nav>
      <ComponentModal show={modal} />
    </>
  );
};

/*
This is a pretty simple navbar that I just added for a little styling and not to have the modal rendering directly on the app.
*/
