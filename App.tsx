import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import DummyComponent from './src/components/DummyComponent';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Text>Dummy Text</Text>
        <DummyComponent />
      </Provider>
    </>
  );
};

export default App;
