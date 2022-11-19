import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CharacterDetailCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default CharacterDetailCard;

const styles = StyleSheet.create({});
