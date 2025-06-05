import "../../style/cataloge/basketList.css";

function BasketList({ basketItem, handleRemoveBasket }) {
  return (
    <>
      {basketItem.map((item) => (
        <li key={item.id} className="listItem">
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}грн</p>
          </div>
          <button type="button" onClick={() => handleRemoveBasket(item.id)}>
            Вилучити з коша
          </button>
        </li>
      ))}
    </>
  );
}

export default BasketList;
