import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from './../constant/style';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./../assets/marvel.png')} />

      <View style={styles.inner_container}>
        <TouchableOpacity onPress={() => navigation.navigate('Characters')}>
          <View style={styles.char_container}>
            <Image
              style={styles.char_img}
              source={{
                uri: 'https://i.pinimg.com/originals/0c/d2/d4/0cd2d44b7752364193f7dba0ee47c76f.jpg',
              }}
            />
            <Text style={styles.text}>CHARACTERS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comics')}>
          <View style={styles.char_container}>
            <Image
              style={styles.char_img}
              source={{
                uri: 'https://i.pinimg.com/originals/80/03/cd/8003cddfc723914e236f047793f25d7d.jpg',
              }}
            />
            <Text style={styles.text}>COMICS</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Creator')}>
          <View style={styles.char_container}>
            <Image
              style={styles.char_img}
              source={{
                uri: 'https://i.pinimg.com/originals/68/de/67/68de67d0e7e29749470a3e66d9e20248.jpg',
              }}
            />
            <Text style={styles.text}>CREATORS</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Events')}>
          <View style={styles.char_container}>
            <Image
              style={styles.char_img}
              source={{
                uri: 'https://i.pinimg.com/564x/9e/5a/40/9e5a40e839ebcee65b25d91b40be46c3.jpg',
              }}
            />
            <Text style={styles.text}>EVENT'S</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Series')}>
          <View style={styles.char_container}>
            <Image
              style={styles.char_img}
              source={{
                uri: 'https://i.pinimg.com/originals/f5/41/ce/f541cee3e11ce91de69415c287f7e106.jpg',
              }}
            />
            <Text style={styles.text}>SERIES</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Stories')}>
          <View style={styles.char_container}>
            <Image
              style={styles.char_img}
              source={{
                uri: 'https://i.pinimg.com/originals/60/dc/06/60dc0641ff5437dea8f891a5942734c5.jpg',
              }}
            />
            <Text style={styles.text}>STORIES</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyle.colors.primary,
  },
  image: {
    width: 350,
    height: 200,
  },

  inner_container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  char_container: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyle.colors.tertiary,
    borderRadius: 10,
    margin: 10,
  },
  char_img: {
    width: 110,
    height: 110,
  },
  text: {
    color: GlobalStyle.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
