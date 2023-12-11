import React from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div style={{backgroundColor: "rgb(237, 230, 220)"}}>
      <NavigationBar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
