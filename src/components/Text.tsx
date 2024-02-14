import React from 'react';
import { StyleProp, StyleSheet, Text as TextReact, TextStyle } from 'react-native';
import theme from '../assets/styles/theme';

const defaultProps = {
  variant: 'headline1' as
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline',
};
type TextProps = {
  style?: StyleProp<TextStyle>;
  color?: string;
  id?: string;
  children?: any;
} & typeof defaultProps;

const Text: React.FC<TextProps> = ({ variant, color, style, children }) => {
  return <TextReact style={[style, styles(variant, color).text]}>{children}</TextReact>;
};

const styles = (
  variant:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline',
  color?: string,
) =>
  StyleSheet.create({
    text: {
      fontFamily: theme.Fonts.family.primary,
      fontSize: getFontSize(variant),
      fontWeight: getFontWeight(variant),
      lineHeight: getLineHeight(variant),
      letterSpacing: getLetterSpacing(variant),
      color: color ? color : theme.Colors.black.main,
    },
  });

const getFontWeight = (variant: string) => {
  switch (variant) {
    case 'headline2':
    case 'headline3':
    case 'headline4':
    case 'headline5':
    case 'subtitle1':
    case 'subtitle2':
    case 'button':
      return theme.Fonts.weight.medium;
    case 'headline1':
      return theme.Fonts.weight.light;
    default:
      return theme.Fonts.weight.normal;
  }
};

const getFontSize = (variant: string) => {
  switch (variant) {
    case 'headline1':
      return 48;
    case 'headline2':
      return 32;
    case 'headline3':
      return 28;
    case 'headline4':
      return 24;
    case 'headline5':
    case 'headline6':
      return 20;
    case 'subtitle1':
    case 'body2':
      return 16;
    case 'subtitle2':
      return 18;
    case 'body1':
    case 'button':
      return 14;
    case 'caption':
    case 'overline':
      return 12;
  }
};

const getLineHeight = (variant: string) => {
  switch (variant) {
    case 'headline1':
    case 'headline2':
      return 48;
    case 'headline3':
    case 'headline4':
      return 36;
    case 'headline5':
    case 'headline6':
      return 32;
    case 'subtitle1':
    case 'subtitle2':
    case 'body2':
    case 'overline':
      return 24;
    case 'body1':
    case 'caption':
      return 20;
    case 'button':
      return 16.5;
  }
};

const getLetterSpacing = (variant: string) => {
  switch (variant) {
    case 'button':
      return 0.5;
    default:
      return 0;
  }
};
Text.defaultProps = defaultProps;

export default Text;
