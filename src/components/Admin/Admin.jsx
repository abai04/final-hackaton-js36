import React from "react";
import "./Admin.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Admin = () => {
  return (
    <Container style={{ display: "flex", flexWrap: "wrap" }}>
      <Link to={"/add"} style={{ textDecoration: "none" }}>
        <div className="block b-1">
          <p style={{ textShadow: "2px 1px 1px black" }}>Добавить продукты</p>
        </div>
      </Link>
      <Link to={"/categories"} style={{ textDecoration: "none" }}>
        <div className="block b-2"><p
        style={{ textShadow: "0px 0px 10px white" }}>Добавить категории</p></div>
      </Link>
    </Container>
  );
};

export default Admin;
