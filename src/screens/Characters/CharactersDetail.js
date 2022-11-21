import {Image, SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useApi from '../../hooks/useApi';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CharacterDetailCard from '../../components/Cards/CharacterCards/CharacterDetailCard';
import CharComicsCard from '../../components/Cards/CharacterCards/CharComicsCard';
import {GlobalStyle} from '../../constant/style';
import Loading from '../../components/Lottie/Loading';

const CharactersDetail = ({route, navigation}) => {
  const {id} = route.params;

  const [data, error, loading] = useApi(`${Config.API_URL}/characters/${id}`);
  const [dataComics] = useApi(`${Config.API_URL}/characters/${id}/comics`);
  const [dataEvents] = useApi(`${Config.API_URL}/characters/${id}/events`);
  const [dataSeries] = useApi(`${Config.API_URL}/characters/${id}/series`);
  const [dataStories] = useApi(`${Config.API_URL}/characters/${id}/stories`);

  const sections = [
    {
      title: 'Character',
      data: data,
    },
    {
      title: 'Comics',
      data: dataComics,
    },
    {
      title: 'Series',
      data: dataSeries,
    },
    {
      title: 'Stories',
      data: dataStories,
    },
    {
      title: 'Events',
      data: dataEvents,
    },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SectionList
        contentContainerStyle={{paddingHorizontal: 10}}
        stickySectionHeadersEnabled={false}
        sections={sections}
        renderSectionHeader={({section}) => (
          <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <FlatList
              data={section.data}
              horizontal
              renderItem={({item}) =>
                section.title === 'Character' ? (
                  <CharacterDetailCard item={item} />
                ) : (
                  <CharComicsCard section={section.title} item={item} />
                )
              }
            />
          </>
        )}
        renderItem={({item, section}) => {
          return null;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyle.colors.tertiary,
    marginVertical: 10,
  },
});

export default CharactersDetail;
