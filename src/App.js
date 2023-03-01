import { useState } from "react";
import "./App.css";
import { try3 } from "./funcs/v3";

function App() {
  const elisten = (e) => {
    console.log(e);
    console.log(e.target.value.getUint8(0));
  };

  const [slkjc, setsdlk] = useState("null");

  const connectBluetooth = async () => {
    try3(setsdlk);
    // console.log(device)
  };

  return (
    <div className="App">
      <div onClick={connectBluetooth}>Click</div>
      <div>{slkjc}</div>
    </div>
  );
}

export default App;
