import React from "react";
import Menu from "./components/menu/Menu";
import ChooseUser from "./components/ChooseUser";
import NavigationBar from "./components/Navbar/NavigationBar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <MainRoutes />
      <Menu />
    </div>
  );
};

export default App;
