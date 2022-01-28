import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ComponentModal } from "./ComponentModal/ComponentModal";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="app">
      <div className="app-btn">
        <Button
          variant="outline-warning"
          size="lg"
          onClick={() => toggle()}
          className="btn"
        >
          Buy & Sell
        </Button>
      </div>
      <></>
      <ComponentModal show={modal} />
    </div>
  );
}

export default App;
