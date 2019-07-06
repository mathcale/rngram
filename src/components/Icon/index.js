import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';

const TouchableIcon = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.btn}>
    <Icon
      name={props.name}
      size={props.size}
      color={props.color}
    />
  </TouchableOpacity>
);

export default TouchableIcon;
