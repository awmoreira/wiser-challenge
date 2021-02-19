import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {Container, SubTitle, Title, TextButton, TextAlert} from './styles';

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
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <>
            <Title>Olá, seja bem-vindo!</Title>
            <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
            <Input
              typeMask="custom"
              label="E-mail"
              touched={!!touched.email || !!values.email}
              placeholder="user.name@mail.com"
              errors={errors.email}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              value={values.email}
              typeInput={errors.email ? 'tertiary' : 'primary'}
            />
            <Input
              typeMask="custom"
              label="Senha"
              touched={!!touched.password || !!values.password}
              placeholder="******"
              errors={errors.password}
              secureTextEntry
              onChangeText={handleChange('password')}
              value={values.password}
              typeInput={errors.email ? 'tertiary' : 'primary'}
            />

            {loading ? (
              <Loading />
            ) : (
              <Button
                type="primary"
                fontsize={16}
                description="Entrar"
                onPress={handleSubmit}
              />
            )}
            {error && (
              <TextAlert color="#EB5757">E-mail ou senha incorretos!</TextAlert>
            )}
            <TextButton onPress={() => navigation.navigate(Routes.LOGGED)}>
              Esqueceu seu login ou senha?
            </TextButton>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;
