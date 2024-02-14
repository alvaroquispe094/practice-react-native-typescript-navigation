import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { Screen } from '../../components';

export const PaymentScreen: FunctionComponent = () => {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.text}>Payments Screen</Text>
    </Screen>
  );
};

const styles = StyleSheet.create<{
  screen: ViewStyle;
  text: TextStyle;
}>({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
