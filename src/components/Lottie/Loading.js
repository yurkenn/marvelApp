import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <Lottie
      style={{
        height: 130,
        width: 130,
        alignSelf: 'center',
        marginTop: 150,
      }}
      source={require('./../../assets/loader.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
