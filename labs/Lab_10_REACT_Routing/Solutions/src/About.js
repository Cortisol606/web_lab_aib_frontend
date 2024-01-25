import React from "react";

const About = () => {
  const openVKPage = () => {
    window.open("https://vk.com/ffttfff", "_blank");
  };

  return (
    <div>
      <h2>О нас</h2>
      <p>Страница, предоставляющая информацию о веб-сервисе и ее владельце.</p>

      <h3>Общежитие №1 в Ростове на Дону</h3>
      <p>
        В нашем обежитии вы познакомитесь с множеством насекомых, сначала вы будете их бояться, но потом сумеете подружится)
      </p>

      <h3>Владелец</h3>
      <p>
        Веб-сервис создан человеком проживающем в общежитии . Посетите мою страницу
         в ВК:{" "}
        <span
          style={{
            color: "purple",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={openVKPage}
        >
          общага кайф
        </span>
        .
      </p>
    </div>
  );
};

export default About;
