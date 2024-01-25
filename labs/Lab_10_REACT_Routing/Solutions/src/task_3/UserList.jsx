import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Star Wars</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.url} className="list-group-item">
            <Link to={`/users/${user.url.split("/people/")[1]}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
