import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {selectUser} from '../redux/authSlice';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
const Home = () => {
  const user = useSelector(selectUser);

  return (
    <View>
      <Text>Home {user.email} </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
