import * as React from 'react';

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
import ComicDetail from '../screens/ComicDetail';
import {GlobalStyle} from '../constant/style';
import SeriesDetail from '../screens/SeriesDetail';
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();
const HomeStack = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const logoutAuth = await logoutFirebase();
    console.log('logoutAuth: ', logoutAuth);
    dispatch(logout());
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyle.colors.primary,
        },
        headerTintColor: GlobalStyle.colors.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Characters"
        component={Characters}
        options={{
          title: 'Marvel Characters',
          headerRight: () => (
            <Icon
              name="star"
              size={20}
              color={GlobalStyle.colors.secondary}
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('Favorites')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CharactersDetail"
        component={CharactersDetail}
        options={{
          title: 'Character Detail',
        }}
      />
      <Stack.Screen
        name="Comics"
        component={Comics}
        options={{
          title: 'Marvel Comics',
        }}
      />
      <Stack.Screen
        name="ComicDetail"
        component={ComicDetail}
        options={{
          title: 'Comic Detail',
        }}
      />
      <Stack.Screen
        name="Creator"
        component={Creator}
        options={{
          title: 'Marvel Creator',
        }}
      />

      <Stack.Screen
        name="Events"
        component={Events}
        options={{
          title: 'Marvel Events',
        }}
      />

      <Stack.Screen
        name="Series"
        component={Series}
        options={{
          title: 'Marvel Series',
        }}
      />
      <Stack.Screen
        name="SeriesDetail"
        component={SeriesDetail}
        options={{
          title: 'Series Detail',
        }}
      />

      <Stack.Screen
        name="Stories"
        component={Stories}
        options={{
          title: 'Marvel Stories',
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
