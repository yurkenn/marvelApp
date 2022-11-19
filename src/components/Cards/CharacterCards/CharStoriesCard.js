import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CharStoriesCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image
          style={styles.image}
          source={{
            uri:
              item.thumbnail === null
                ? 'https://imagensemoldes.com.br/wp-content/uploads/2020/05/Ilustra%C3%A7%C3%A3o-Avengers-PNG.png'
                : item.thumbnail.path + '.' + item.thumbnail.extension,
          }}
        />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  );
};

export default CharStoriesCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    height: 150,
    width: 120,
  },
  inner_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 12,
    color: '#000',
  },
});
