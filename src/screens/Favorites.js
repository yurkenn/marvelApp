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
});
