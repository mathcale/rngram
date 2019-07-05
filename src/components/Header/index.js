import React from 'react';
import { View, Text } from 'react-native';

import Icon from '../Icon';
import styles from './styles';

const Header = props => (
  <View style={styles.header}>
    <View style={styles.headerContent}>
      <Icon name="camera" />

      <Text style={styles.logo}>RNGram</Text>

      <Icon name="camera" />
    </View>
  </View>
);

export default Header;
