import "../../style/userCard/userCard.css";

const users = [
  {
    id: 1,
    name: "Олександр Коваль",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Марія Шевченко",
    age: 24,
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Ігор Петренко",
    age: 35,
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Наталія Вернидуб",
    age: 30,
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Дмитро Соловей",
    age: 22,
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Ірина Литвин",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

function UserCard() {
  const handleBtnWelcome = (name) => {
    alert(`ВІтаємо ${name}!`);
  };

  return (
    <div id="userCards">
      <h2 className="userTitle">Список юзерів</h2>
      <ul className="userList">
        {users.map((user) => (
          <li key={user.id} className="containerUser ">
            <img src={user.photo} alt={`Фото ${user.name}`} />
            <h3>Ім'я: {user.name}</h3>
            <p>Вік: {user.age}</p>
            <button type="button" onClick={() => handleBtnWelcome(user.name)}>
              Привітання
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
