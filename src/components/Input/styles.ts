import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

interface IContainerProps {
  width?: string;
}
export const Container = styled.View<IContainerProps>`
  width: ${({width}) => width || '100%'};
  margin-bottom: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const WrapperLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  margin-right: 10px;
`;

export const Touchable = styled.TouchableOpacity`
  position: absolute;
  top: 45;
  left: ${(props) => (props.theme.metrics.screenWidth < 375 ? 200 : 280)};
`;

export const IconRight = styled.Image``;

export const Label = styled.Text`
  font-size: ${(props) =>
    props.theme.metrics.screenWidth < 375 ? '12px' : '14px'};
  color: ${(props) => props.theme.colors.primary.labelInput};
  font-family: ${({theme}) => theme.fonts.bold};
  line-height: 18px;
  margin-bottom: 5px;
`;

interface InputProps {
  typeInput: 'primary' | 'secondary' | 'tertiary';
  alignCenter: boolean;
}

export const Input = styled.TextInput<InputProps>`
  height: 48px;
  font-size: ${({theme}) =>
    theme.metrics.screenWidth < 375 ? '12px' : '14px'};
  font-weight: 500;
  justify-content: center;
  text-align: ${({alignCenter}) => (alignCenter ? 'center' : 'left')};
  border-width: ${({typeInput}) => (typeInput === 'secondary' ? '0px' : '1px')};
  padding: 8px 11px 8px 11px;
  border-color: ${({theme, typeInput}) =>
    typeInput === 'tertiary'
      ? theme.colors.failure
      : theme.colors.primary.border};
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary.main};
  color: ${({theme, typeInput}) =>
    typeInput === 'secondary'
      ? theme.colors.secondary.textInput
      : theme.colors.primary.textInput};
`;

type IInputMask = InputProps;

export const InputMask = styled(TextInputMask)<IInputMask>`
  height: 48px;
  font-size: ${({theme}) =>
    theme.metrics.screenWidth < 375 ? '12px' : '14px'};
  font-weight: 500;
  justify-content: center;
  border-width: ${({typeInput}) => (typeInput === 'secondary' ? '0px' : '1px')};
  padding: 8px 11px 8px 11px;
  border-color: ${({theme, typeInput}) =>
    typeInput === 'tertiary'
      ? theme.colors.failure
      : theme.colors.primary.border};
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary.main};
  color: ${({theme, typeInput}) =>
    typeInput === 'secondary'
      ? theme.colors.secondary.textInput
      : theme.colors.primary.textInput};
`;

export const WrapperError = styled.View`
  align-items: center;
  height: 22px;
`;

export const TextError = styled.Text`
  margin: 5px 0 0;
  font-size: 12px;
  opacity: 0.9;
  color: #eb5757;
  font-family: ${({theme}) => theme.fonts.extraBold};
`;
