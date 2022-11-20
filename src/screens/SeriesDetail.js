import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SeriesDetailCard from '../components/Cards/SeriesCards/SeriesDetailCard';
import useApi from '../hooks/useApi';
import Config from 'react-native-config';

const SeriesDetail = ({route}) => {
  const {id} = route.params;

  const [data, error, loading] = useApi(`${Config.API_URL}/series/${id}`);

  const renderItem = ({item}) => <SeriesDetailCard item={item} />;

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default SeriesDetail;

const styles = StyleSheet.create({});
