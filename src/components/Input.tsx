import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../assets/styles/theme';

const CustomTextInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {isFocused && (
        <Text
          variant={getTextVariant(isFocused)}
          style={[styles.placeholder, isFocused && styles.focusedPlaceholder]}>
          {'Ingrese texto'}
        </Text>
      )}
      <TextInput
        style={[styles.input, isFocused && styles.focusedInput]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={inputText => setText(inputText)}
        value={text}
        placeholder={getPlaceHolder(isFocused)}
      />
    </View>
  );
};

const getPlaceHolder = (isFocused: boolean) => {
  return isFocused ? '' : 'Ingrese texto';
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: 'gray',
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: theme.Colors.gray1.light,
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

export default CustomTextInput;
