import { useState, useEffect } from "react";
import "./App.css";
import Store from "./components/Store/Store";
import Navbar from "./components/Navbar/Navbar";
import PriceButtons from "./components/PriceButtons/PriceButtons";
import axios from "axios";

function App() {
  const [inventory, setInventory] = useState([]);

  const searchItems = async () => {
    const response = await axios.get(
      "https://wine-back-test.herokuapp.com/products?page=1&limit=10"
    );
    setInventory(response.data.items);
  };

  useEffect(() => {
    searchItems();
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
