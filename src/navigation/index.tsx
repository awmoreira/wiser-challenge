import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {RootState} from '~/store/ducks/rootReducer';
import Routes from './routes';
import Logged from './Logged';
import Unlogged from './Unlogged';

const Stack = createStackNavigator();

const Main: React.FC = () => {
  const {accessToken} = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator initialRouteName={Routes.UNLOGGED}>
      {accessToken ? (
        <Stack.Screen
          name={Routes.LOGGED}
          component={Logged}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      ) : (
        <Stack.Screen
          name={Routes.UNLOGGED}
          component={Unlogged}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationTypeForReplace: accessToken ? 'push' : 'pop',
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Main;
