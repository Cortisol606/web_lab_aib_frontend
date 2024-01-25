import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!user) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>Сведения о персонаже</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Имя: {user.name}</p>
          <p className="card-text">Рост: {user.height}</p>
          <p className="card-text">Масса: {user.mass}</p>
          <p className="card-text">Волосы: {user.hair_color}</p>
          <p className="card-text">Кожа: {user.skin_color}</p>
          <p className="card-text">Глаза: {user.eye_color}</p>
          <p className="card-text">День рождения: {user.birth_year}</p>
          <p className="card-text">Пол: {user.gender}</p>
          <p className="card-text">
            Films:
            <ul>
              {user.films.map((film, index) => (
                <li key={index}>
                  <a href={film} target="_blank" rel="noopener noreferrer">
                    {`Фильм ${film.split("/").reverse()[1]}`}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
