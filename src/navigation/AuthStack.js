import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './../screens/Auth/Login';
import Register from './../screens/Auth/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
