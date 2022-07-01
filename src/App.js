import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Store from "./components/Store/Store";
import Navbar from "./components/Navbar/Navbar";
import PriceButtons from "./components/PriceButtons/PriceButtons";

function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("https://wine-back-test.herokuapp.com/products?page=1&limit=10")
      .then((response) => {
        setInventory(response.data.items);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <PriceButtons setInventory={setInventory} inventory={inventory} />
        <Store inventory={inventory} />
      </div>
    </div>
  );
}

export default App;
