import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Logo,
  SubTitle,
  Title,
  TextButton,
  TextAlert,
} from './styles';

import Images from '~/assets/images';
import Routes from '~/navigation/routes';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Loading from '~/components/Loading';

import validationSchema, {Types} from '~/screens/SignIn/validationSchema';

import AuthActions from '~/store/ducks/auth/actions';
import {RootState} from '~/store/ducks/rootReducer';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {loading, error} = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      <Formik
        initialValues={{email: '', password: ''} as Types}
        onSubmit={(values: Types) => {
          dispatch(AuthActions.signInRequest(values));
        }}
        validationSchema={validationSchema}>
        {(formikProps) => (
          <>
            <Title>Olá, seja bem-vindo!</Title>
            <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
            <Input
              typeMask="custom"
              label="E-mail"
              touched={
                !!formikProps.touched.email || !!formikProps.values.email
              }
              placeholder="E-mail"
              errors={formikProps.errors.email}
              keyboardType="email-address"
              onChangeText={formikProps.handleChange('email')}
              value={formikProps.values.email}
            />
            <Input
              typeMask="custom"
              label="Senha"
              touched={
                !!formikProps.touched.password || !!formikProps.values.password
              }
              placeholder="Senha"
              errors={formikProps.errors.password}
              secureTextEntry
              onChangeText={formikProps.handleChange('password')}
              value={formikProps.values.password}
            />
            <TextButton onPress={() => navigation.navigate(Routes.LOGGED)}>
              Esqueci minha senha!
            </TextButton>
            {loading ? (
              <Loading />
            ) : (
              <Button
                type="tertiary"
                fontsize={12}
                description="Entrar"
                onPress={formikProps.handleSubmit}
              />
            )}
            {error && (
              <TextAlert color="#EB5757">E-mail ou senha incorretos!</TextAlert>
            )}
          </>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;
