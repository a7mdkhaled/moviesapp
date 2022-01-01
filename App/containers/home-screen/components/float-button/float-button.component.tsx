import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './float-button.styles';

type FloatButtonProps = {
  setAddToListModal: () => null;
};
const FloatButton: FC<FloatButtonProps> = ({setAddToListModal}) => {
  return (
    <TouchableOpacity onPress={setAddToListModal} style={styles.ButtonStyle}>
      <Text style={styles.plusText}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatButton;
