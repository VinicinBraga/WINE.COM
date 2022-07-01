import React from "react";

function Store({ inventory }) {
  return (
    <div className="store-page">
      {inventory.map((obj) => {
        return (
          <div className="product-container">
            <li key={obj.name} className="product-item">
              <img src={obj.image} alt="vinhos" width={120} />
              <div className="object-name">{obj.name}</div>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default Store;
