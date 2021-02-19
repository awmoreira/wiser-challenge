import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes';

import SignIn from '~/screens/SignIn';

const Auth = createStackNavigator();

const noHeader = {
  headerShown: false,
};

// const transparentHeader = {
//   headerTitle: ' ',
//   headerTintColor: '#0080FF',
//   headerBackTitle: ' ',
//   headerTransparent: true,
//   headerStyle: {borderBottomWidth: 0},
// };

const Unlogged: React.FC = () => (
  <Auth.Navigator initialRouteName={Routes.SIGN_IN}>
    <Auth.Screen name={Routes.SIGN_IN} component={SignIn} options={noHeader} />
  </Auth.Navigator>
);

export default Unlogged;
