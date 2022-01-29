import { useState } from "react";
import { Navbar } from "./Navbar/Navbar";

function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
