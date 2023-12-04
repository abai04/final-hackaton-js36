import React, { useState } from "react";
import bgcourier from "../components/assets/bgcour.webp";
const CourierPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("email не можеть быть пустым");
  const [passwordError, setPasswordError] = useState(
    "пароль не можеть быть пустым"
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div>
      <img
        style={{
          display: "block",
          width: "50%",
          height: "34rem",
        }}
        src={bgcourier}
      />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "35rem",
          marginLeft: "60%",
          marginTop: "-22rem",
        }}
      >
        <h1>Регистрация</h1>
        <input
          style={{ borderRadius: "5px", height: "3rem", width: "50%" }}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="text"
          placeholder="Имя и фамилия"
        />
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          style={{ borderRadius: "5px", height: "3rem", width: "50%" }}
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="text"
          placeholder="эл.почта"
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <button
          style={{
            borderRadius: "5px",
            height: "3rem",
            width: "50%",
            background: " #2ABB9B",
          }}
          type="submit"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default CourierPage;
