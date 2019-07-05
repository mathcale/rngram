import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { images } from '../../utils';
import styles from './styles';

const Icon = props => (
  <TouchableOpacity style={styles.btn}>
    <Image
      source={images[props.name].uri}
      style={styles.image}
    />
  </TouchableOpacity>
);

export default Icon;
