import "./App.css";
import { trythis } from "./funcs/v1";

function App() {
  const elisten = (e) => {
    console.log(e);
    console.log(e.target.value.getUint8(0));
  };

  const connectBluetooth = async () => {
    trythis();
    // console.log(device)
  };

  return (
    <div className="App">
      <div onClick={connectBluetooth}>Click</div>
    </div>
  );
}

export default App;
