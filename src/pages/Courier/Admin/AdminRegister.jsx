import React from "react";
import "./AdminRegister.css";

const AdminRegister = () => {
  return (
    <div className="register_container">
      <div className="position_cintainer">
        {" "}
        <div className="left_container"></div>
        <div className="center_container">
          <div className="center_top_green">
            <div className="green_text_logo">
              <h1>K</h1>
            </div>
            <div className="text_admin_register">
              <h2>ADMIN ACCOUNT</h2>
            </div>
            <div className="input_login">
              <input
                className="inp_log"
                type="text"
                placeholder="Вводите почту"
              />
            </div>
            <div className="input_password">
              <input
                className="inp_log"
                type="password"
                placeholder="Вводите пароль"
              />
            </div>
            <div className="input_button">
              <button className="btn_click">SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="right_container"></div>
      </div>
    </div>
  );
};

export default AdminRegister;
