import { useState } from "react";
import { ComponentModal } from "./ComponentModal/ComponentModal";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="bg-slate-500">
      <div className="app-btn">
        <button
          variant="outline-warning"
          size="lg"
          onClick={() => toggle()}
          className="btn"
        >
          Buy & Sell
        </button>
      </div>
      <></>
      <ComponentModal show={modal} />
    </div>
  );
}

export default App;
