import { useState } from "react";
import Images from "./components/Images";
import Modal from "./components/Modal";
import Navbar from "./components/navbar";

function App() {
  const [selected, setSelected] = useState(null);
  const [data , setData] = useState(null);
  console.log(selected);
  return (
    <div>
      <Navbar setData={setData} />
      <Images data={data} setSelected={setSelected} />
      <Modal selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;