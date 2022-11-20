import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../constant/style';

const CharactersCard = ({item, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.inner_container}>
          <Image
            style={styles.image}
            source={{uri: item.thumbnail.path + '.' + item.thumbnail.extension}}
          />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharactersCard;

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
