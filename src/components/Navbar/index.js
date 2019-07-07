import React from 'react';
import { View } from 'react-native';

import TouchableIcon from '../Icon';
import { colors } from '../../utils';
import styles from './styles';

const Navbar = props => (
  <View style={styles.navbarContainer}>
    <TouchableIcon
      name="home"
      size={28}
      color={colors.black}
      onPress={() => alert('home')}
    />

    <TouchableIcon
      name="magnifier"
      size={28}
      color={colors.black}
      onPress={() => alert('search')}
    />

    <TouchableIcon
      name="plus"
      size={28}
      color={colors.black}
      onPress={() => alert('add photo')}
    />

    <TouchableIcon
      name="heart"
      size={28}
      color={colors.black}
      onPress={() => alert('interactions')}
    />

    <TouchableIcon
      name="user"
      size={28}
      color={colors.black}
      onPress={() => alert('profile')}
    />
  </View>
);

export default Navbar;
