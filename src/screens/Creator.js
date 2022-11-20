import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useApi from '../hooks/useApi';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';
import {GlobalStyle} from '../constant/style';
import CreatorCard from './../components/Cards/CreatorCard/CreatorCard';
const Creator = ({navigation}) => {
  const [data, error, loading] = useApi(`${Config.API_URL}/creators`);

  console.log(data);

  const renderItem = ({item}) => <CreatorCard item={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={data} numColumns={2} renderItem={renderItem} />
    </View>
  );
};

export default Creator;
const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyle.colors.primary,
  },
});
