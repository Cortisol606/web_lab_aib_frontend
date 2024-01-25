import React, { useState } from "react";

const Main = () => {
  const [isHidden, setHidden] = useState(false);

  const toggleText = () => {
    setHidden(!isHidden);
  };

  return (
    <div className="container mt-4">
      <h2>Главная</h2>
      <p>Здесь должно быть что-то интересное.</p>
      <span
        onClick={toggleText}
        style={{
          cursor: "pointer",
          color: "gray",
          textDecoration: "underline",
        }}
      >
        Попробуй нажать на меня.
      </span>
      {isHidden && (
        <div className="mt-3 alert alert-info">
          <p>
            Но это всего лишь первое задание по роутингу... ヾ(￣▽￣) Bye~Bye~
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
