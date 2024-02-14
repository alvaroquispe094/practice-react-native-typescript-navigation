import React, { FunctionComponent, useState } from 'react';
import { View, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Text from '../components/Text';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import theme from '../assets/styles/theme';

export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFindBeneficiarios: () => void;
}

const ModalFromBottom: FunctionComponent<ModalProps> = ({
  isVisible,
  onClose,
  onFindBeneficiarios,
}) => {
  //const [isModalVisible, setIsModalVisible] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    // Aquí puedes realizar alguna acción con el valor del input
    console.log('Input value:', inputValue);
    // Por ejemplo, podrías enviar el valor a través de una función de callback
    // y luego cerrar el modal
    onFindBeneficiarios();
    onClose();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={onClose}
        backdropOpacity={0.5}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text variant="subtitle2" color={theme.Colors.white.main}>
            Buscar por CBU, CVU o Alias
          </Text>
          <FormInput
            placeholder="CBU, CVU o Alias"
            value={inputValue}
            onChangeText={handleInputChange}
          />
          <Button onClick={handleSubmit} size="md" variant="secondary" icon="paper-plane-o">
            Buscar
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default ModalFromBottom;
