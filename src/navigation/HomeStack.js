import * as React from 'react';

import Home from './../screens/Home/Home';
import Characters from './../screens/Characters/Characters';
import CharactersDetail from './../screens/Characters/CharactersDetail';
import Comics from '../screens/Comics/Comics';
import Creator from '../screens/Creator/Creator';
import Events from './../screens/Events/Events';
import Series from './../screens/Series/Series';
import Stories from './../screens/Stories/Stories';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';
import {logout as logoutFirebase} from '../hooks/firebase';
import {createStackNavigator} from '@react-navigation/stack';
import ComicDetail from '../screens/Comics/ComicDetail';
import {GlobalStyle} from '../constant/style';
import SeriesDetail from '../screens/Series/SeriesDetail';
import Favorites from '../screens/Favorites/Favorites';
import StoriesDetail from '../screens/Stories/StoriesDetail';
import EventsDetail from '../screens/Events/EventsDetail';
import CreatorDetail from '../screens/Creator/CreatorDetail';
import {StyleSheet} from 'react-native';

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
        headerTintColor: GlobalStyle.colors.tertiary,
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
              style={styles.headerRight}
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
          headerRight: () => (
            <Icon
              name="sign-out-alt"
              size={25}
              color={GlobalStyle.colors.secondary}
              style={styles.headerRight}
              onPress={handleLogout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Comics"
        component={Comics}
        options={{
          title: 'Marvel Comics',
          headerRight: () => (
            <Icon
              name="star"
              size={20}
              color={GlobalStyle.colors.secondary}
              style={styles.headerRight}
              onPress={() => navigation.navigate('Favorites')}
            />
          ),
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
          headerRight: () => (
            <Icon
              name="star"
              size={20}
              color={GlobalStyle.colors.secondary}
              style={styles.headerRight}
              onPress={() => navigation.navigate('Favorites')}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CreatorDetail"
        component={CreatorDetail}
        options={{
          title: 'Creator Detail',
        }}
      />

      <Stack.Screen
        name="Events"
        component={Events}
        options={{
          title: 'Marvel Events',
          headerRight: () => (
            <Icon
              name="star"
              size={20}
              color={GlobalStyle.colors.secondary}
              style={styles.headerRight}
              onPress={() => navigation.navigate('Favorites')}
            />
          ),
        }}
      />

      <Stack.Screen
        name="EventsDetail"
        component={EventsDetail}
        options={{
          title: 'Events Detail',
        }}
      />

      <Stack.Screen
        name="Series"
        component={Series}
        options={{
          title: 'Marvel Series',
          headerRight: () => (
            <Icon
              name="star"
              size={20}
              color={GlobalStyle.colors.secondary}
              style={styles.headerRight}
              onPress={() => navigation.navigate('Favorites')}
            />
          ),
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
          headerRight: () => (
            <Icon
              name="star"
              size={20}
              color={GlobalStyle.colors.secondary}
              style={styles.headerRight}
              onPress={() => navigation.navigate('Favorites')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="StoriesDetail"
        component={StoriesDetail}
        options={{
          title: 'Stories Detail',
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

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 10,
  },
});
