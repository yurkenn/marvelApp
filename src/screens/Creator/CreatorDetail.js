import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import Config from 'react-native-config';
import useApi from '../../hooks/useApi';
import {FlatList} from 'react-native-gesture-handler';
import {GlobalStyle} from '../../constant/style';
import Loading from '../../components/Lottie/Loading';

const CreatorDetail = ({route}) => {
  const {id} = route.params;
  const [data, error, loading] = useApi(`${Config.API_URL}/creators/${id}`);

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
export default CreatorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
});
