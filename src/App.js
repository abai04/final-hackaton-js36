import React from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";
import { useCart } from "./contexts/CartContextProvider";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
