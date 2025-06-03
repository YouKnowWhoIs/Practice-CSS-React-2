import { useEffect, useState } from "react";
import "../../style/usersTable/UsersTable.css";

const users = [
  { name: "Олена Іваненко", email: "olena.ivanenko@example.com", city: "Київ" },
  {
    name: "Андрій Шевченко",
    email: "andriy.shevchenko@example.com",
    city: "Львів",
  },
  { name: "Марія Коваль", email: "maria.koval@example.com", city: "Одеса" },
  { name: "Ігор Ткачук", email: "ihor.tkachuk@example.com", city: "Харків" },
  {
    name: "Наталія Бондар",
    email: "natalia.bondar@example.com",
    city: "Дніпро",
  },
  {
    name: "Олексій Павленко",
    email: "oleksii.pavlenko@example.com",
    city: "Запоріжжя",
  },
  {
    name: "Світлана Романюк",
    email: "svitlana.romanyuk@example.com",
    city: "Чернігів",
  },
  {
    name: "Владислав Демченко",
    email: "vlad.demchenko@example.com",
    city: "Полтава",
  },
  {
    name: "Інна Сидоренко",
    email: "inna.sydorenko@example.com",
    city: "Івано-Франківськ",
  },
  {
    name: "Руслан Вербицький",
    email: "ruslan.verbitsky@example.com",
    city: "Тернопіль",
  },
];

function UsersTable() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const hendleSearchName = (e) => {
    setName(e.target.value);
  };

  const filterName = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  useEffect(() => {
    if (filterName.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, [filterName]);

  return (
    <div className="conteinerTable">
      <div>
        <input
          type="text"
          value={name}
          onChange={hendleSearchName}
          placeholder="Впиши ім'я"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Пошта</th>
            <th>Місто</th>
          </tr>
        </thead>
        <tbody>
          {filterName.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p className="errorText">Нічого не знайдено!</p>}
    </div>
  );
}

export default UsersTable;
