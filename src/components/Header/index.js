import React from 'react';
import { View, Text } from 'react-native';

import Icon from '../Icon';
import { colors } from '../../utils';

import styles from './styles';

const Header = props => (
  <View style={styles.header}>
    <View style={styles.headerContent}>
      <Icon
        name="camera"
        size={32}
        color={colors.black}
        onPress={() => alert('camera')}
      />

      <Text style={styles.logo}>RNGram</Text>

      <Icon
        name="paper-plane"
        size={32}
        color={colors.black}
        onPress={() => alert('direct')}
      />
    </View>
  </View>
);

export default Header;
