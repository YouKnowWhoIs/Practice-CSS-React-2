import "../../style/cataloge/listCatalog.css";

function ListCatalog({ products, handleAddBasket }) {
  return (
    <>
      {products.map((item) => (
        <li key={item.id} className="catalogItem">
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}грн</p>
          </div>
          <button type="button" onClick={() => handleAddBasket(item)}>
            Додати в кошик
          </button>
        </li>
      ))}
    </>
  );
}

export default ListCatalog;
