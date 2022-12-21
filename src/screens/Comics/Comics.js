import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import {GlobalStyle} from '../../constant/style';
import CharactersCard from '../../components/Cards/CharacterCards/CharactersCard';
import Loading from '../../components/Lottie/Loading';
const Comics = ({navigation}) => {
  const [data, error, loading] = useApi(`${Config.API_URL}/comics`);

  console.log(data);

  const handleComicSelect = id => {
    navigation.navigate('ComicDetail', {id});
  };

  const renderItem = ({item}) => (
    <CharactersCard item={item} onSelect={() => handleComicSelect(item.id)} />
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

export default Comics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.primary,
  },
});
