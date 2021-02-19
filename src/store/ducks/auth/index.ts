import {Reducer} from 'redux';
import {AuthState, AuthTypes, IUser} from './types';

const INITIAL_STATE: AuthState = {
  user: {} as IUser,
  error: false,
  loading: false,
  signedIn: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_OUT:
      return INITIAL_STATE;

    case AuthTypes.SIGN_IN_REQUEST:
      return {...state, loading: true};

    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload.data,
        signedIn: true,
      };

    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        signedIn: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
