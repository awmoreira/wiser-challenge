import {action} from 'typesafe-actions';
import {AuthTypes, IUser} from './types';
import {Types as SignInTypes} from '~/screens/SignIn/validationSchema';

const signInRequest = (values: SignInTypes) =>
  action(AuthTypes.SIGN_IN_REQUEST, {values});

const signInSuccess = (
  data: IUser,
  accessToken: string,
  refreshToken: string,
) =>
  action(AuthTypes.SIGN_IN_SUCCESS, {
    data,
    accessToken,
    refreshToken,
  });

const signInFailure = () => action(AuthTypes.SIGN_IN_FAILURE);

const signOut = () => action(AuthTypes.SIGN_OUT);

export default {
  signInRequest,
  signInSuccess,
  signInFailure,
  signOut,
};
