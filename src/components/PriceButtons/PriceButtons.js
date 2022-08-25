import { useState } from "react";
import "./PriceButtons.css";

function PriceButtons({ setInventory, inventory }) {
  const [selected, setSelected] = useState({ name: "", value: "" });

  const handleClick = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSelected({ ...selected, name, value });
  };

  return (
    <div className="by-price-container">
      <div className="title">
        <h3>Redefine sua busca</h3>
      </div>
      <div className="by-price">
        <div className="sub-title">Por Preço</div>
        <div className="btn-tags">
          <input
            type="radio"
            value="40"
            name="1"
            id="1"
            onClick={(e) => handleClick(e)}
          />{" "}
          Até R$40
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="100"
            name="40"
            id="2"
            onClick={(e) => handleClick(e)}
          />{" "}
          R$40 A R$100
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="200"
            name="100"
            id="3"
            onClick={(e) => handleClick(e)}
          />{" "}
          R$100 A R$200
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="500"
            name="200"
            id="4"
            onClick={(e) => handleClick(e)}
          />{" "}
          R$200 A R$500
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="9999999"
            name="500"
            id="5"
            onClick={(e) => handleClick(e)}
          />{" "}
          Acima de R$500
        </div>
      </div>
    </div>
  );
}

export default PriceButtons;
