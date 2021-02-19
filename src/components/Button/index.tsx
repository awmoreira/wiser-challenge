import React from 'react';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

import Loading from '~/components/Loading';
import colors from '~/theme/colors';
import {
  Container,
  WrapperDescription,
  Description,
  Background,
  WrapperButton,
} from './styles';

interface IButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'large' | 'medium';
  fontsize?: number;
  icon?: unknown;
  iconLeft?: boolean;
  style?: StyleProp<ViewStyle>;
  description?: string;
  onPress?(event: GestureResponderEvent): void;
  loading?: boolean;
  disabled?: boolean;
  shadow?: boolean;
  paddingBottom?: boolean;
  colorLoadingIndicator?: string;
}

const Button: React.FC<IButtonProps> = ({
  type = 'primary',
  fontsize = 14,
  icon,
  iconLeft,
  description = 'Informe o texto do botao',
  style = {},
  onPress,
  loading,
  disabled,
  shadow,
  paddingBottom,
  size = 'large',
  colorLoadingIndicator = '#000',
}) => {
  colors[type].button || colors.primary.button;
  return (
    <WrapperButton shadow={shadow}>
      <Background
        colors={[
          colors[type].button,
          type === 'primary' ? '#9D25B0' : colors[type].button,
        ]}
        size={size}
        style={style}>
        <Container
          type={type}
          onPress={onPress}
          disabled={disabled}
          paddingBottom={!!paddingBottom}>
          {loading ? (
            <Loading color={colorLoadingIndicator} />
          ) : (
            <WrapperDescription>
              {iconLeft && icon}
              <Description type={type} fontsize={fontsize}>
                {description}
              </Description>
              {!iconLeft && icon}
            </WrapperDescription>
          )}
        </Container>
      </Background>
    </WrapperButton>
  );
};

export default Button;
