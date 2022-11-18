import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './../screens/Home';
import Stories from './../screens/Stories';
import Comics from './../screens/Comics';
import Creator from './../screens/Creator';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';
import Profile from '../screens/Profile';
import {logout as logoutFirebase} from '../hooks/firebase';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const logoutAuth = await logoutFirebase();
    console.log('logoutAuth: ', logoutAuth);
    dispatch(logout());
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <Icon
              name="sign-out-alt"
              size={25}
              color="#000"
              onPress={handleLogout}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stories"
        component={Stories}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Comics"
        component={Comics}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Creator"
        component={Creator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
