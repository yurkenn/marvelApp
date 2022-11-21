import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import {GlobalStyle} from '../../constant/style';
import CharactersCard from '../../components/Cards/CharacterCards/CharactersCard';
import Loading from '../../components/Lottie/Loading';

const Series = ({navigation}) => {
  const [data, loading] = useApi(`${Config.API_URL}/series`);

  console.log(data);

  const handleSeriesSelect = id => {
    navigation.navigate('SeriesDetail', {id});
  };

  const renderItem = ({item}) => (
    <CharactersCard item={item} onSelect={() => handleSeriesSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default Series;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.primary,
  },
});
