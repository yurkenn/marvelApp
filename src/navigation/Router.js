import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
const Router = () => {
  const isAuth = useSelector(state => state.user.isAuthenticated);

  console.log(isAuth);

  return (
    <NavigationContainer>
      {isAuth ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
