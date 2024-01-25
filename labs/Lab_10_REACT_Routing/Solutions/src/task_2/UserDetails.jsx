import React from "react";
import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const user = location.state.user;

  return (
    <div className="container mt-4">
      <h1>User Details</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text">ID: {user.id}</p>
          <p className="card-text">Имя: {user.name}</p>
          <p className="card-text">
            GitHub:{" "}
            <a href={user.git} target="_blank" rel="noopener noreferrer">
              {user.git}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
