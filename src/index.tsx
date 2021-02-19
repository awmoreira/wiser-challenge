import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/navigation';
import store from './store';

import {theme} from '~/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
