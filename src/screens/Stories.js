import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useApi from '../hooks/useApi';
import StoriesCard from '../components/Cards/StoriesCard/StoriesCard';
import {GlobalStyle} from '../constant/style';

const Stories = ({navigation}) => {
  const [data, error, loading] = useApi(`${Config.API_URL}/stories`);

  console.log(data);

  const renderItem = ({item}) => <StoriesCard item={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.primary,
  },
});
