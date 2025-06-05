import { useEffect, useState } from "react";
import "../../style/cataloge/cataloge.css";
import BasketList from "./BasketList";
import ListCatalog from "./ListCatalog";

const products = [
  {
    id: 1,
    name: "Бездротові навушники",
    description:
      "Зручні та компактні навушники з чистим звуком і Bluetooth 5.0.",
    price: 899,
  },
  {
    id: 2,
    name: "Повербанк 10000mAh",
    description: "Потужний зарядний пристрій для ваших гаджетів.",
    price: 649,
  },
  {
    id: 3,
    name: "Рюкзак для ноутбука",
    description: "Місткий водостійкий рюкзак з відділенням для ноутбука.",
    price: 1200,
  },
  {
    id: 4,
    name: "Мишка бездротова",
    description: "Ергономічна мишка з тривалим часом роботи.",
    price: 379,
  },
  {
    id: 5,
    name: "Клавіатура механічна",
    description:
      "Механічна клавіатура з RGB-підсвіткою та українською розкладкою.",
    price: 1450,
  },
  {
    id: 6,
    name: "Термокружка",
    description: "Зберігає тепло до 6 годин, ідеальна для подорожей.",
    price: 320,
  },
  {
    id: 7,
    name: "Смарт-годинник",
    description: "Слідкує за здоров’ям, повідомленнями та активністю.",
    price: 2099,
  },
  {
    id: 8,
    name: "USB-хаб 4 порти",
    description: "Компактний хаб для розширення можливостей вашого ПК.",
    price: 199,
  },
  {
    id: 9,
    name: "Настільна лампа",
    description: "LED-лампа з регулюванням яскравості та кольору світла.",
    price: 570,
  },
  {
    id: 10,
    name: "Зовнішній жорсткий диск 1ТБ",
    description: "Надійне зберігання даних з USB 3.0.",
    price: 1850,
  },
];

function Cataloge() {
  const [basketItem, setBasketItem] = useState(() => {
    const savedItems = localStorage.getItem("item");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [errorText, setErrorText] = useState(false);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(basketItem));
  }, [basketItem]);

  const handleAddBasket = (item) => {
    const isAlreadyInBasket = basketItem.some((el) => el.id === item.id);

    if (!isAlreadyInBasket) {
      setBasketItem((prev) => [...prev, item]);
      setErrorText(false);
    } else {
      setErrorText(true);
    }
  };

  const handleRemoveBasket = (id) => {
    setBasketItem((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="conteinerCatalog">
      <div className="conteinerCatalogList">
        <p className="catalogText">Товари</p>
        <ul className="catalog">
          <ListCatalog products={products} handleAddBasket={handleAddBasket} />
        </ul>
      </div>

      <div className="conteinercatalogItems">
        <p className="catalogText">Кошик</p>
        {errorText && <p className="errorText">Цей товар вже є у коші!</p>}
        <ul className="catalog">
          <BasketList
            basketItem={basketItem}
            handleRemoveBasket={handleRemoveBasket}
          />
        </ul>
      </div>
    </div>
  );
}

export default Cataloge;
