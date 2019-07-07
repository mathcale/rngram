import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import {
  Home,
  Search,
  NewPhoto,
  Interactions,
  Profile
} from './screens';

import { Navbar } from './components';
import { colors } from './utils';

const TabBarComponent = props => (
  <Navbar {...props} />
);

const Navigator = createBottomTabNavigator(
  {
    Home,
    Search,
    NewPhoto,
    Interactions,
    Profile,
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    tabBarOptions: {
      showLabel: false,
    },
    tabBarComponent: props => <TabBarComponent {...props} />
  }
);

export default createAppContainer(Navigator);
