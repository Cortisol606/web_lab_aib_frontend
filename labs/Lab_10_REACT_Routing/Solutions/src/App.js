import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import UserList from "./task1/UserList";
import UserDetails from "./task2/UserDetails";

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Главная
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                О нас
              </Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
