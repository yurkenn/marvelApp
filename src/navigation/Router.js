import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
const Router = () => {
  const [user, setUser] = useState(false);
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
