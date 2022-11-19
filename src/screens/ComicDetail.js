import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useApi from '../hooks/useApi';
import ComicDetailCard from '../components/Cards/ComicCards/ComicDetailCard';
import {GlobalStyle} from '../constant/style';

const ComicDetail = ({route}) => {
  const {id} = route.params;

  const [data, error, loading] = useApi(`${Config.API_URL}/comics/${id}`);

  const renderItem = ({item}) => <ComicDetailCard item={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default ComicDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
});
