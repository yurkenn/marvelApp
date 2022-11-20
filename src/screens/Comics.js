import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useApi from '../hooks/useApi';
import Config from 'react-native-config';
import ComicCard from '../components/Cards/ComicCards/ComicCard';
import {GlobalStyle} from '../constant/style';
const Comics = ({navigation}) => {
  const [data, error, loading] = useApi(`${Config.API_URL}/comics`);

  console.log(data);

  const handleComicSelect = id => {
    navigation.navigate('ComicDetail', {id});
  };

  const renderItem = ({item}) => (
    <ComicCard item={item} onSelect={() => handleComicSelect(item.id)} />
  );

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

export default Comics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.primary,
  },
});
