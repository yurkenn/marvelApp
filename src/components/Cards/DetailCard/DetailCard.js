import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyle} from '../../../constant/style';

const DetailCard = ({item}) => {
  let description =
    item.description === '' ? 'No description' : item.description;

  let thumbnail =
    item.thumbnail === null
      ? 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      : item.thumbnail.path + '.' + item.thumbnail.extension;
  let name = item.name ? item.name : item.title ? item.title : item.fullName;

  let detail = item.urls ? item.urls[0].url : item.resourceURI;

  // open link
  const openLink = () => {
    Linking.openURL(detail);
  };

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: thumbnail,
          }}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={openLink} style={styles.button}>
          <Text style={styles.button_text}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 500,
    width: 350,
    margin: 20,
    borderRadius: 10,
  },
  image_container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
  },
  text_container: {
    flex: 1,
    flexShrink: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  button_container: {
    backgroundColor: GlobalStyle.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 90,
    height: 30,
  },
  button_text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
