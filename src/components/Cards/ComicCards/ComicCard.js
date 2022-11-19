import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../constant/style';
const ComicCard = ({item, onSelect}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onSelect}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.inner_contaienr}>
          <Image
            style={styles.image}
            source={{uri: item.thumbnail.path + '.' + item.thumbnail.extension}}
          />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ComicCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: -25,
  },
  inner_contaienr: {
    width: 100,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    color: GlobalStyle.colors.tertiary,
  },
  pressed: {
    opacity: 0.7,
  },
});
