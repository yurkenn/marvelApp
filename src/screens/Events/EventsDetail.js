import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import {GlobalStyle} from '../../constant/style';
import Loading from '../../components/Lottie/Loading';

const EventsDetail = ({route}) => {
  const {id} = route.params;

  const [data, error, loading] = useApi(`${Config.API_URL}/events/${id}`);

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

export default EventsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
});
