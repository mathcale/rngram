import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Home } from './screens';
import { Navbar } from './components';
import { colors } from './utils';

const Navigator = createStackNavigator(
  {
    Home
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <>
        <AppContainer />
        <Navbar />
      </>
    )
  }
}
