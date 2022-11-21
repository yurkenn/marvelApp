import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import FavoriteCard from '../components/Cards/FavoriteCard/FavoriteCard';
import {removeFavorite} from '../redux/favoriteSlice';
import {GlobalStyle} from '../constant/style';

const Favorites = () => {
  const fav = useSelector(state => state.favorite.value);

  const renderItem = ({item}) => <FavoriteCard item={item} />;

  if (fav.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Favorites</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fav}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
  text: {
    color: GlobalStyle.colors.tertiary,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
