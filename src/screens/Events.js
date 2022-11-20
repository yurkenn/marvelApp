import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useApi from '../hooks/useApi';
import Config from 'react-native-config';
import EventCard from '../components/Cards/EventCards/EventCard';
import {GlobalStyle} from '../constant/style';
const Events = ({navigation}) => {
  const [data, error, loading] = useApi(`${Config.API_URL}/events`);

  console.log(data);

  const handleSelectEvent = id => {
    navigation.navigate('EventDetail', {id});
  };

  const renderItem = ({item}) => (
    <EventCard item={item} onSelect={handleSelectEvent} />
  );

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
