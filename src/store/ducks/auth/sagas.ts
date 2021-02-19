/* eslint-disable camelcase */
import {call, put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import {AxiosResponse} from 'axios';
import api from '~/services/api';

import {AuthTypes} from './types';
import AuthActions from './actions';
import {IUser} from './types';

export function* signIn(props: any) {
  const {email, password} = props.payload.values;

  try {
    const response: AxiosResponse<{
      user: IUser;
      access_token: string;
      refresh_token: string;
    }> = yield call(api.post, 'auth/SIGN_IN', {email, password});

    if (response.data) {
      const {
        user,
        access_token: access,
        refresh_token: refresh,
      } = response.data;

      yield call([AsyncStorage, 'setItem'], '@refreshToken', refresh);
      yield call([AsyncStorage, 'setItem'], '@accessToken', access);
      yield call([AsyncStorage, 'setItem'], '@user', JSON.stringify(user));
      yield put(AuthActions.signInSuccess(user, access, refresh));
    } else {
      yield put(AuthActions.signInFailure());
    }
  } catch (err) {
    yield put(AuthActions.signInFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
