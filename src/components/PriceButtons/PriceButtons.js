import "./PriceButtons.css";

function PriceButtons({ setInventory, inventory, initialState }) {
  const handlePrice = (e) => {
    console.log(e.checked);
    const newInventoy = inventory.filter(
      (obj) =>
        obj.priceMember < e.target.value && obj.priceMember > e.target.name
    );
    setInventory(newInventoy);
    console.log(newInventoy);
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
            value="100"
            name="1"
            onClick={(e) => handlePrice(e)}
          />{" "}
          Até R$100
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="200"
            name="100"
            onClick={(e) => handlePrice(e)}
          />{" "}
          R$100 A R$200
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="300"
            name="200"
            onClick={(e) => handlePrice(e)}
          />{" "}
          R$200 A R$300
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="400"
            name="300"
            onClick={(e) => handlePrice(e)}
          />{" "}
          R$300 A R$400
        </div>
        <div className="btn-tags">
          <input
            type="radio"
            value="500"
            name="400"
            onClick={(e) => handlePrice(e)}
          />{" "}
          Acima de R$400
        </div>
      </div>
    </div>
  );
}

export default PriceButtons;
