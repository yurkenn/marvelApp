import {StyleSheet, View} from 'react-native';
import React from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';
import {GlobalStyle} from '../../constant/style';
import CharactersCard from '../../components/Cards/CharacterCards/CharactersCard';
import Loading from '../../components/Lottie/Loading';
const Creator = ({navigation}) => {
  const [data, loading] = useApi(`${Config.API_URL}/creators`);

  console.log(data);
  const handleComicSelect = id => {
    navigation.navigate('CreatorDetail', {id});
  };

  const renderItem = ({item}) => (
    <CharactersCard item={item} onSelect={() => handleComicSelect(item.id)} />
  );
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data} numColumns={2} renderItem={renderItem} />
    </View>
  );
};

export default Creator;
const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.primary,
  },
});
