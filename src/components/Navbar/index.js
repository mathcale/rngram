import React, { Component } from 'react';
import { View } from 'react-native';

import TouchableIcon from '../Icon';
import { colors } from '../../utils';
import styles from './styles';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.navbarContainer}>
        <TouchableIcon
          name="home"
          size={28}
          color={colors.black}
          onPress={() => this.props.navigation.navigate('Home', {})}
        />

        <TouchableIcon
          name="magnifier"
          size={28}
          color={colors.black}
          onPress={() => this.props.navigation.navigate('Search', {})}
        />

        <TouchableIcon
          name="plus"
          size={28}
          color={colors.black}
          onPress={() => this.props.navigation.navigate('NewPhoto', {})}
        />

        <TouchableIcon
          name="heart"
          size={28}
          color={colors.black}
          onPress={() => this.props.navigation.navigate('Interactions', {})}
        />

        <TouchableIcon
          name="user"
          size={28}
          color={colors.black}
          onPress={() => this.props.navigation.navigate('Profile', {})}
        />
      </View>
    );
  }
}
