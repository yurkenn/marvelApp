import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../constant/style';
import {ScrollView} from 'react-native-gesture-handler';

const CharacterDetailCard = ({item}) => {
  let description =
    item.description === '' ? 'No description' : item.description;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.inner_container}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <ScrollView>
          <Text style={styles.description}>{description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default CharacterDetailCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    height: 270,
    width: 320,
  },
  inner_container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalStyle.colors.tertiary,
    margin: 10,
  },
  description: {
    flexShrink: 1,
    marginTop: 6,
    fontSize: 15,
    color: GlobalStyle.colors.tertiary,
  },
});
