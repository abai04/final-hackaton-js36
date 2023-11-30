import React from 'react';
import ChooseUser from './components/ChooseUser';
import NavigationBar from './components/Navbar/NavigationBar';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <MainRoutes/>
    </div>
  );
};

export default App;
