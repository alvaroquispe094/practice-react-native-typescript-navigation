import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import theme from '../assets/styles/theme';
import Text from './Text';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultProps = {
  variant: 'primary' as 'primary' | 'secondary' | 'action' | 'warning' | 'translucid',
  size: 'lg' as 'sm' | 'md' | 'lg',
};

type ButtonProps = {
  onClick?: () => void;
  children?: any;
  icon?: string;
  iconAlign?: 'left' | 'right';
} & typeof defaultProps;

const Button: React.FC<ButtonProps> = ({ variant, size, onClick, children, icon }) => {
  return (
    <Pressable style={styles(variant, size).button} onPress={onClick}>
      <Text color={getTextColor(variant)} variant={getTextVariant(variant)}>
        {children}
      </Text>
      {icon && renderIcon(icon)}
    </Pressable>
  );
};

const renderIcon = (icon: string) => {
  return <Icon name={icon} size={24} />;
};
const styles = (
  variant: 'primary' | 'secondary' | 'action' | 'warning' | 'translucid',
  size: 'sm' | 'md' | 'lg',
) =>
  StyleSheet.create({
    button: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: getColor(variant),
      borderRadius: 8,
      padding: 10,
      margin: 10,
      height: getHeight(size),
      width: getWidth(size),
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    text: {
      color: getTextColor(variant),
    },
  });
const getColor = (variant: 'primary' | 'secondary' | 'action' | 'warning' | 'translucid') => {
  switch (variant) {
    case 'primary':
      return theme.Colors.primary.main;
    case 'secondary':
      return theme.Colors.primary.light;
    case 'action':
      return theme.Colors.accentGreen.main;
    case 'warning':
      return theme.Colors.warning.main;
    case 'translucid':
      return theme.Colors.white.light;
  }
};

const getWidth = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return '10%';
    case 'md':
      return '40%';
    case 'lg':
      return '80%';
  }
};
const getHeight = (size: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 40;
    case 'md':
      return 58;
    case 'lg':
      return 74;
  }
};

const getTextColor = (variant: 'primary' | 'secondary' | 'action' | 'warning' | 'translucid') => {
  switch (variant) {
    case 'translucid':
      return theme.Colors.white.main;
    default:
      return theme.Colors.black.main;
  }
};

const getTextVariant = (variant: 'primary' | 'secondary' | 'action' | 'warning' | 'translucid') => {
  switch (variant) {
    case 'translucid':
      return 'subtitle2';
    default:
      return 'button';
  }
};

export default Button;
