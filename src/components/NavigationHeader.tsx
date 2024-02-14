import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../assets/styles/theme';
import LinearGradient from 'react-native-linear-gradient';

const NavigationHeader = (props) => {
  return (
    <LinearGradient
      colors={['#5433FF', '#1193C9', '#47C7C1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.8 }}
      style={styles.container}
      locations={[0.07, 0.53, 0.9]}>
      <Text variant="headline5" color={theme.Colors.white.main}>
        {props.options.title}
      </Text>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
});

export default NavigationHeader;
