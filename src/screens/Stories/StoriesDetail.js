import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import useApi from '../../hooks/useApi';
import Config from 'react-native-config';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import {GlobalStyle} from '../../constant/style';
import Loading from '../../components/Lottie/Loading';

const StoriesDetail = ({route}) => {
  const {id} = route.params;

  const [data, error, loading] = useApi(`${Config.API_URL}/stories/${id}`);
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <DetailCard item={item} />}
      />
    </View>
  );
};

export default StoriesDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.primary,
  },
});
