export interface IUser {
  id: number;
  name: string;
  email: string;
}

// eslint-disable-next-line no-shadow
export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE',
  SIGN_OUT = '@auth/SIGN_OUT',
}

export interface AuthState {
  user: IUser;
  accessToken: string;
  refreshToken: string;
  loading: boolean;
  error: boolean;
}
