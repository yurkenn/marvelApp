import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyle} from '../../../constant/style';

const StoriesCard = ({item, onSelect}) => {
  let thumbnail =
    item.thumbnail === null
      ? 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      : item.thumbnail.path + '.' + item.thumbnail.extension;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.inner_container}>
          <Image style={styles.image} source={{uri: thumbnail}} />
          <Text style={styles.text}>{item.title.slice(0, 15)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StoriesCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: GlobalStyle.colors.primary,
  },
  inner_container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 140,
    height: 140,
    margin: 10,
  },
  image: {
    flex: 1,
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: 'bold',
    color: GlobalStyle.colors.primary,
  },
});
