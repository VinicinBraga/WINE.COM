import React from "react";
import "./Store.css";

function Store({ inventory }) {
  return (
    <div className="store-page">
      <h3>produtos encontrados</h3>
      <ul className="obj-list">
        {inventory.map((obj) => {
          return (
            <div className="product-container">
              <li key={obj.name} className="product-item">
                <img src={obj.image} alt="vinhos" width={120} />
                <div className="object-name">{obj.name}</div>
                <div className="object-price">{obj.price} 60% off</div>
                <div className="object-priceMember">
                  SÓCIO WINE {`R$${obj.priceMember}`}
                </div>
                <div className="object-priceNonMember">
                  NÃO SÓCIO {obj.priceNonMember}
                </div>
              </li>
              <button className="add-product-btn">ADICIONAR</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Store;
