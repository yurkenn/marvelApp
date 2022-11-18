import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './../screens/Auth/Login';
import Register from './../screens/Auth/Register';
import HomeStack from './HomeStack';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
