import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import {GlobalStyle} from '../../constant/style';
import Loading from '../../components/Lottie/Loading';

const SeriesDetail = ({route}) => {
  const {id} = route.params;

  const [data, loading] = useApi(`${Config.API_URL}/series/${id}`);

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

export default SeriesDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
});
