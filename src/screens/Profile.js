import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from '../redux/authSlice';
import auth from '@react-native-firebase/auth';
import {selectUserInfo, updateUserInfo} from '../redux/userInfoSlice';

const Profile = () => {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState(userInfo.displayName);
  const [avatar, setAvatar] = useState(userInfo.photoURL);
  console.log(displayName);

  const update = async () => {
    await auth()
      .currentUser.updateProfile({
        displayName: displayName,
        photoURL: avatar,
      })
      .then(() => {
        console.log('User updated!');
        console.log('User updated!', auth().currentUser);
      });
    dispatch(updateUserInfo(auth().currentUser));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: userInfo.photoURL,
        }}
      />
      <Text style={styles.text}>Name: {userInfo.displayName}</Text>
      <Text style={styles.text}>Email: {userInfo.email}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setDisplayName(text)}
        value={displayName}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setAvatar(text)}
        value={avatar}
      />
      <Button title="Update" onPress={update} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    width: 200,
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100,
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
