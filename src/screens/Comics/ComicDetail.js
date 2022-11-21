import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useApi from '../../hooks/useApi';
import {GlobalStyle} from '../../constant/style';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import Loading from '../../components/Lottie/Loading';

const ComicDetail = ({route}) => {
  const {id} = route.params;

  const [data, loading] = useApi(`${Config.API_URL}/comics/${id}`);

  const renderItem = ({item}) => <DetailCard item={item} />;

  if (loading) {
    return <Loading />;
  }

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
