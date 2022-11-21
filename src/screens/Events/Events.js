import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import {GlobalStyle} from '../../constant/style';
import CharactersCard from '../../components/Cards/CharacterCards/CharactersCard';
import Loading from '../../components/Lottie/Loading';
const Events = ({navigation}) => {
  const [data, loading] = useApi(`${Config.API_URL}/events`);

  console.log(data);

  const handleSelectEvent = id => {
    navigation.navigate('EventDetail', {id});
  };

  const renderItem = ({item}) => (
    <CharactersCard item={item} onSelect={handleSelectEvent} />
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

export default Events;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
});
