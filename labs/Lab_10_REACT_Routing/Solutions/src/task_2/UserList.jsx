import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Акаев Д.И.",
    git: "https://github.com/DeniAkaev/web_lab_aib_frontend.git" },
  { id: 2, name: "Банкос А.И.",
    git: "https://github.com/Fedya0723/web_lab_aib_frontend.git" },
  { id: 3, name: "Будников Н.С.",
    git: "https://github.com/clouduppance/web_lab_aib_frontend.git" },
  { id: 4, name: "Герасимов В.Ф.",
    git: "https://github.com/griv03/web_lab_aib_frontend" },
  { id: 5, name: "Демьянов А.В.",
    git: "https://github.com/PenPencilMarkerPen/web_lab_aib_frontend" },
  { id: 6, name: "Каркошко М.А.",
    git: "https://github.com/mrrmka/web_lab_aib_frontend.git" },
  { id: 7, name: "Митькова А.А.",
    git: "https://github.com/NastyaMitkova/web_lab_aib_frontend.git" },
  { id: 8, name: "Панченко В.М.",
    git: "https://github.com/Viktoriamayer55/web_lab_aib_frontend.git" },
  { id: 9, name: "Трегубов Н.В.",
    git: "https://github.com/TR3N1K/web_lab_aib_frontend.git" },
  { id: 10, name: "Цыгикало Е.Е.",
    git: "https://github.com/TsygikaloEkaterina/web_lab_aib_frontend.git" },
];

const UserList = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Группа АИБ-3-044</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`} state={{ user }}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
