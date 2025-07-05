import { useEffect, useState } from "react";
import "../../style/filter/filter.css";

const products = [
  {
    id: 701,
    name: "Бездротові навушники",
    image:
      "https://i0.wp.com/www.myhoco.com.ua/wp-content/uploads/2024/01/4.jpg?fit=800%2C800&ssl=1",
  },
  {
    id: 702,
    name: "Розумний годинник",
    image:
      "https://vest.in.ua/image/cache/catalog/mobiking/6/67221584-smart-watch-gelius-pro-gp-sw004-amazwatch-gt2-bluetooth-call-ipx7-black-12-mes-0100000086355-sn-1000x1000.jpg",
  },
  {
    id: 703,
    name: "Портативна колонка",
    image: "https://i.moyo.ua/img/products/5742/50_1500.jpg",
  },
  {
    id: 704,
    name: "Ігрова миша",
    image: "https://content2.rozetka.com.ua/goods/images/big/397093598.png",
  },
  {
    id: 705,
    name: "Клавіатура з підсвіткою",
    image:
      "https://images.prom.ua/5101185918_w640_h640_igrovaya-mehanicheskaya-klaviatura.jpg",
  },
  {
    id: 706,
    name: "Монітор 24''",
    image: "https://defis.ua/image/cache/catalog/1/17/17630-xW.jpg",
  },
  {
    id: 707,
    name: "Вебкамера HD",
    image: "https://images.prom.ua/2986162215_usb-veb-kamera-1080p.jpg",
  },
  {
    id: 708,
    name: "Зовнішній SSD",
    image: "https://img.moyo.ua/img/categories/4884/4884_1473863064_67.jpg",
  },
];

function Filter() {
  const [name, setName] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [errorList, setErrorList] = useState(false);
  const [filteredItems, setFilteredItems] = useState(products);

  const handleSearch = (e) => {
    setName(e.target.value);
  };

  const handleBtnSearch = () => {
    setErrorInput(false);

    if (name.trim() === "") {
      setErrorInput(true);
      return;
    }

    const filterItem = products.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    setFilteredItems(filterItem);
    setName("");
  };

  useEffect(() => {
    if (filteredItems.length === 0) {
      setErrorList(true);
    } else {
      setErrorList(false);
    }
  }, [filteredItems]);

  return (
    <>
      <div id="filter">
        <div className="productSearch">
          <input
            value={name}
            onChange={handleSearch}
            type="text"
            placeholder="Веди назву товара"
          />
          <button onClick={handleBtnSearch} type="button">
            Пошук
          </button>
        </div>

        {errorInput && <p>Поле пусте!</p>}
        {errorList && <p>Нічого не знайденно</p>}

        <ul className="itemsList">
          {filteredItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={`Картинка ${item.name}`} />
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Filter;
