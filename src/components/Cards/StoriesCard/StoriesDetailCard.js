import {Image, StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyle} from '../../../constant/style';

const StoriesDetailCard = ({item}) => {
  let description =
    item.description === '' ? 'No description' : item.description;

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={{uri: item.thumbnail.path + '.' + item.thumbnail.extension}}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StoriesDetailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: GlobalStyle.colors.tertiary,
    height: 300,
    width: 370,
  },
  inner_container: {
    flex: 1,
    flexDirection: 'row',
  },
  text_container: {
    flex: 1,
    padding: 10,
  },
  image_container: {},

  image: {
    flex: 1,
    width: 120,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    flex: 1,
    color: '#000',
    fontSize: 14,
  },
  price: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    backgroundColor: GlobalStyle.colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  button_text: {
    color: GlobalStyle.colors.tertiary,
    textAlign: 'center',
  },
});
