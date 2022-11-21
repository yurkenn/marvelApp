import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Router from './navigation/Router';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Router />
      </GestureHandlerRootView>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
