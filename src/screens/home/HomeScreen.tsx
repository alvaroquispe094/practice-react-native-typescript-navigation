import React, { FunctionComponent, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../components/Text';
import theme from '../../assets/styles/theme';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { faker } from '@faker-js/faker';
import ModalFromBottom from '../../components/ModalFromBottom';

export const HomeScreen: FunctionComponent = () => {
  const [saldo, setSaldo] = useState('');
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const clientId = route.params?.clientId;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const findBeneficiarios = cbu => {
    fetch('https://api.redbee.cl/v1/self/accounts/' + clientId, {
      method: 'GET',
      headers: {
        username: route.params?.username,
        password: route.params?.password,
        clientId: clientId,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBeneficiarios(data.summary.balance);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener el saldo:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setSaldo(faker.finance.amount());
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  return (
    <View>
      <LinearGradient
        colors={['#5433FF', '#1193C9', '#47C7C1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        style={styles.container}
        locations={[0.07, 0.53, 0.9]}>
        <View style={styles.balanceContainer}>
          <View style={styles.nameContainer}>
            <Text variant="subtitle1" color={theme.Colors.white.main}>
              Hola, pepito24
            </Text>
            <Icon name="bell" size={24} />
          </View>
          <Text variant="caption" color={theme.Colors.accentCyan.main} style={styles.balanceText}>
            BALANCE
          </Text>
          <View style={styles.symbolContainer}>
            <Text variant="headline4" color={theme.Colors.white.main} style={styles.symbol}>
              $
            </Text>
            <Text variant="headline1" color={theme.Colors.white.main}>
              {saldo}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button onClick={toggleModal} size="md" variant="translucid" icon="paper-plane-o">
            Envía
          </Button>

          <Button size="md" variant="translucid" icon="money">
            Recibí
          </Button>
        </View>
      </LinearGradient>
      <ModalFromBottom
        isVisible={isModalVisible}
        onClose={toggleModal}
        onFindBeneficiarios={findBeneficiarios}
      />
    </View>
  );

  /*const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come
            back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">Read the docs to discover what to do next:</Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  */
};

/*type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}*/

/*const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  balanceContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 90,
  },
  symbolContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 353,
  },
  greeting: {
    fontSize: 20,
    marginBottom: 10,
  },
  balance: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
  symbol: {
    paddingBottom: 10,
    paddingRight: 5,
  },
  balanceText: {
    padding: 30,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '88%',
  },
});
