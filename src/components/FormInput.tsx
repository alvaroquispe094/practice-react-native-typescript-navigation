import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../assets/styles/theme';

const defaultProps = {
  placeholder: 'Placeholder',
};
type FormInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
} & typeof defaultProps;

const FormInput: React.FC<FormInputProps> = ({ value, onChangeText, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {(isFocused || value) && (
        <Text
          variant={getTextVariant(isFocused || value !== undefined)}
          style={[
            styles.placeholder,
            (isFocused || value !== undefined) && styles.focusedPlaceholder,
          ]}>
          {placeholder}
        </Text>
      )}
      <TextInput
        style={[styles.input, isFocused && styles.focusedInput]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        value={value}
        placeholder={getPlaceHolder(isFocused, placeholder)}
      />
    </View>
  );
};

const getPlaceHolder = (isFocused: boolean, placeholder: string) => {
  return isFocused ? '' : placeholder;
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: theme.Colors.gray1.light,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 32,
    color: theme.Colors.black.main,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 10,
    color: theme.Colors.black.main,
    zIndex: 1,
  },
  focusedInput: {
    borderColor: 'blue',
  },
  focusedPlaceholder: {
    top: -10,
    color: theme.Colors.black.main,
  },
});

const getTextVariant = (isFocused: boolean) => {
  return isFocused ? 'caption' : 'headline5';
};

FormInput.defaultProps = defaultProps;

export default FormInput;
