import React from 'react';
import ChooseUser from './components/ChooseUser';
import NavigationBar from './components/Navbar/NavigationBar';
import MainRoutes from './routes/MainRoutes';
import UserRegister from './components/UserAuth/UserRegister';

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <MainRoutes/>
      <UserRegister/>
    </div>
  );
};

export default App;
