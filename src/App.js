import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Store from "./components/Store/Store";

function App() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get("https://wine-back-test.herokuapp.com/products?page=1&limit=10")
      .then((response) => {
        setInventory(response.data.items);
        console.log(response.data.items);
      });
  }, []);

  return (
    <div>
      <div className="main-container">
        <Store inventory={inventory} />
      </div>
    </div>
  );
}

export default App;
