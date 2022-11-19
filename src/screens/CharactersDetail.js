import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useApi from '../hooks/useApi';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CharacterDetailCard from '../components/Cards/CharacterCards/CharacterDetailCard';
import CharComicsCard from '../components/Cards/CharacterCards/CharComicsCard';
import CharEventsCard from '../components/Cards/CharacterCards/CharEventsCard';
import CharSeriesCard from '../components/Cards/CharacterCards/CharSeriesCard';
import CharStoriesCard from '../components/Cards/CharacterCards/CharStoriesCard';
import {GlobalStyle} from '../constant/style';
import Loading from '../components/Lottie/Loading';
import Error from '../components/Lottie/Error';
const CharactersDetail = ({route}) => {
  const {id} = route.params;

  const [data, error, loading] = useApi(`${Config.API_URL}/characters/${id}`);
  const [dataComics] = useApi(`${Config.API_URL}/characters/${id}/comics`);
  const [dataEvents] = useApi(`${Config.API_URL}/characters/${id}/events`);
  const [dataSeries] = useApi(`${Config.API_URL}/characters/${id}/series`);
  const [dataStories] = useApi(`${Config.API_URL}/characters/${id}/stories`);

  console.log('data', data);

  const renderItem = ({item}) => <CharacterDetailCard item={item} />;
  const renderComics = ({item}) => <CharComicsCard item={item} />;
  const renderSeries = ({item}) => <CharSeriesCard item={item} />;
  const renderStories = ({item}) => <CharStoriesCard item={item} />;
  const renderEvents = ({item}) => <CharEventsCard item={item} />;

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList data={data} renderItem={renderItem} />
        <Text style={styles.title}>COMICS</Text>
        <FlatList data={dataComics} horizontal renderItem={renderComics} />
        <Text style={styles.title}>SERIES</Text>
        <FlatList data={dataSeries} horizontal renderItem={renderSeries} />
        <Text style={styles.title}>STORIES</Text>
        <FlatList data={dataStories} horizontal renderItem={renderStories} />
        <Text style={styles.title}>EVENTS</Text>
        <FlatList data={dataEvents} horizontal renderItem={renderEvents} />
      </View>
    </ScrollView>
  );
};

export default CharactersDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10,
    color: GlobalStyle.colors.tertiary,
  },
});
