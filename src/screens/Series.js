import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SeriesCard from '../components/Cards/SeriesCards/SeriesCard';
import useApi from '../hooks/useApi';
import Config from 'react-native-config';
import {GlobalStyle} from '../constant/style';

const Series = ({navigation}) => {
  const [data, error, loading] = useApi(`${Config.API_URL}/series`);

  console.log(data);

  const handleSeriesSelect = id => {
    navigation.navigate('SeriesDetail', {id});
  };

  const renderItem = ({item}) => (
    <SeriesCard item={item} onSelect={() => handleSeriesSelect(item.id)} />
  );

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
