import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CharComicsCard = ({item}) => {
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
      </View>
    </View>
  );
};

export default CharComicsCard;

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
  title: {
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});
