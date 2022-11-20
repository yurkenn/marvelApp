import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import useApi from '../hooks/useApi';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';
import CharactersCard from '../components/Cards/CharacterCards/CharactersCard';
import {GlobalStyle} from '../constant/style';
import Loading from './../components/Lottie/Loading';
import Error from './../components/Lottie/Error';
const Characters = ({navigation}) => {
  const [search, setSearch] = useState('');

  const [data, error, loading] = useApi(
    search === ''
      ? `${Config.API_URL}/characters`
      : `${Config.API_URL}/characters&nameStartsWith=${search}`,
  );

  const handleCharSelect = id => {
    navigation.navigate('CharactersDetail', {id});
  };

  const renderItem = ({item}) => (
    <CharactersCard item={item} onSelect={() => handleCharSelect(item.id)} />
  );
  console.log(search);
  console.log('data', data);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.primary,
  },
});
