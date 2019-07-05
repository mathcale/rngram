import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Home } from './screens';
import { Icon } from './components';
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

export default createAppContainer(Navigator);
