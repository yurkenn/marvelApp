import {StyleSheet, Text, TextInput, View} from 'react-native';
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
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marvel Characters</Text>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'grey'}
        style={styles.text_input}
        onChangeText={text => setSearch(text)}
        value={search}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

export default Characters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: GlobalStyle.colors.tertiary,
    marginTop: 20,
  },
  text_input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
    backgroundColor: GlobalStyle.colors.tertiary,
  },
});
