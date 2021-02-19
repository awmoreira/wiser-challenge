import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes';

import Home from '~/screens/Home';

const Auth = createStackNavigator();

const noHeader = {
  headerShown: false,
};

const Unlogged: React.FC = () => (
  <Auth.Navigator initialRouteName={Routes.HOME}>
    <Auth.Screen name={Routes.HOME} component={Home} options={noHeader} />
  </Auth.Navigator>
);

export default Unlogged;
