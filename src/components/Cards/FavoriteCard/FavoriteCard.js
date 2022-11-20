import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../constant/style';
import {useDispatch} from 'react-redux';
import {removeFavorite} from '../../../redux/favoriteSlice';

const FavoriteCard = ({item}) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFavorite(item));
  };

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onLongPress={handleRemoveItem}>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image
            style={styles.image}
            source={{uri: item.thumbnail.path + '.' + item.thumbnail.extension}}
          />
          <Text style={styles.text}>{item.name.slice(0, 15)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FavoriteCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: GlobalStyle.colors.primary,
    flexDirection: 'row',
  },
  inner_container: {
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
  pressed: {
    opacity: 0.7,
  },
});
