import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './header-button.styles';

interface Props {
  title: String;
  onPress: () => null;
  active: boolean;
}
function HeaderButtons({title, onPress = () => null, active}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.Container, active && {backgroundColor: 'green'}]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default memo(HeaderButtons);
