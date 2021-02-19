import React, {RefObject} from 'react';
import {
  ImageSourcePropType,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

import {
  Container,
  WrapperLabel,
  Icon,
  IconRight,
  Touchable,
  Label,
  Input,
  InputMask,
  WrapperError,
  TextError,
} from './styles';

interface ITextInputProps {
  icon?: ImageSourcePropType;
  iconVisible?: ImageSourcePropType;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  width?: string;
  label?: string;
  onChangeText(event: any): void;
  value: string;
  placeholder: string;
  placeholderTextColor?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions;
  touched: boolean;
  errors?: string;
  inputMask?: boolean;
  typeMask: TextInputMaskTypeProp;
  typeInput?: 'primary' | 'secondary' | 'tertiary';
  optionsMask?: TextInputMaskOptionProp;
  ref?: RefObject<any>;
  onSubmitEditing?(): void;
  hideShowPWD?(): void;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  editable?: boolean;
  alignCenter?: boolean;
}

const TextInput: React.FC<ITextInputProps> = ({
  icon,
  iconVisible,
  style = {},
  width,
  label,
  onChangeText,
  value,
  placeholder,
  placeholderTextColor = '#ccc',
  autoCapitalize = 'none',
  autoCorrect,
  keyboardType = 'default',
  touched,
  errors,
  inputMask,
  typeMask,
  typeInput = 'primary',
  optionsMask,
  ref = null,
  onSubmitEditing,
  returnKeyType,
  secureTextEntry,
  hideShowPWD,
  maxLength,
  editable = true,
  alignCenter,
}) => (
  <Container style={style} width={width}>
    {label && (
      <WrapperLabel>
        {icon && <Icon source={icon} resizeMode="contain" />}
        <Label>{label}</Label>
      </WrapperLabel>
    )}

    {inputMask ? (
      <InputMask
        type={typeMask}
        options={optionsMask}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        ref={ref}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        editable={editable}
        typeInput={typeInput}
        maxLength={maxLength}
        alignCenter={!!alignCenter}
      />
    ) : (
      <>
        <Input
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          typeInput={typeInput}
          maxLength={maxLength}
          editable={editable}
          alignCenter={!!alignCenter}
        />
        {iconVisible && (
          <Touchable onPress={hideShowPWD}>
            <IconRight source={iconVisible} resizeMode="contain" />
          </Touchable>
        )}
      </>
    )}
    <WrapperError>
      {touched && errors && <TextError>{errors}</TextError>}
    </WrapperError>
  </Container>
);

export default TextInput;
