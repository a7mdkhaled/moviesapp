import React, {FC, memo} from 'react';
import {TextInput} from 'react-native';
import styles from './text-input.styles';

type TextInputComponentProps = {
  placeholder: string;
  onChange: () => null;
};

/** text input component to add enter the details */

const TextInputCustom: FC<TextInputComponentProps> = ({
  placeholder,
  onChange,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={text => onChange(text)}
      style={styles.textInput}
    />
  );
};

export default memo(TextInputCustom);
