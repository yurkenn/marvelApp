import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {GlobalStyle} from '../../../constant/style';
import {addFavorite} from '../../../redux/favoriteSlice';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from 'react-native-reanimated';
import {showMessage, hideMessage} from 'react-native-flash-message';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const CharactersCard = ({item, onSelect}) => {
  const dispatch = useDispatch();

  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const rStlye = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(400, withSpring(0));
      }
    });
    showMessage({
      message: 'Added to favorite',
      type: 'success',
      icon: 'success',
      duration: 1000,
    });
    return dispatch(addFavorite(item));
  }, [scale, dispatch, item]);

  let name = item.name ? item.name : item.title ? item.title : item.fullName;

  let thumbnail =
    item.thumbnail === null
      ? 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      : item.thumbnail.path + '.' + item.thumbnail.extension;

  return (
    <TapGestureHandler waitFor={doubleTapRef} onActivated={onSelect}>
      <TapGestureHandler
        ref={doubleTapRef}
        numberOfTaps={2}
        onActivated={onDoubleTap}>
        <Animated.View>
          <View style={styles.container}>
            <View style={styles.inner_container}>
              <Image
                style={styles.image}
                source={{
                  uri: thumbnail,
                }}
              />
              <AnimatedImage
                style={[styles.hearth, rStlye]}
                source={require('./../../../assets/like.png')}
              />
              <Text style={styles.text}>{name.slice(0, 10)}</Text>
            </View>
          </View>
        </Animated.View>
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

export default CharactersCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: GlobalStyle.colors.primary,
  },
  hearth: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
  inner_container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 140,
    height: 140,
    margin: 10,
  },
  image: {
    flex: 1,
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: 'bold',
    color: GlobalStyle.colors.primary,
  },
});
