import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './../screens/Home';
import Characters from './../screens/Characters';
import CharactersDetail from './../screens/CharactersDetail';
import Comics from './../screens/Comics';
import Creator from './../screens/Creator';
import Events from './../screens/Events';
import Series from './../screens/Series';
import Stories from './../screens/Stories';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';
import {logout as logoutFirebase} from '../hooks/firebase';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeStack = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const logoutAuth = await logoutFirebase();
    console.log('logoutAuth: ', logoutAuth);
    dispatch(logout());
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="CharactersDetail" component={CharactersDetail} />
      <Stack.Screen name="Comics" component={Comics} />
      <Stack.Screen name="Creator" component={Creator} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="Stories" component={Stories} />
    </Stack.Navigator>
  );
};

export default HomeStack;
