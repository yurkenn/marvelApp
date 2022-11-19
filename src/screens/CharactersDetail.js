import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useApi from '../hooks/useApi';
import {FlatList} from 'react-native-gesture-handler';
import CharacterDetailCard from '../components/Cards/CharacterDetailCard';
const CharactersDetail = ({route}) => {
  const {id} = route.params;

  const [data, error, loading] = useApi(`${Config.API_URL}/characters/${id}`);

  console.log('data', data);

  const renderItem = ({item}) => <CharacterDetailCard item={item} />;

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default CharactersDetail;

const styles = StyleSheet.create({});
