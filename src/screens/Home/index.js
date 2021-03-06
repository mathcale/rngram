import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Feed } from '../../components';
import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Feed />
      </View>
    )
  }
}
