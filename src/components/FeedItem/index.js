import React from 'react';
import { View, Text } from 'react-native';

const FeedItem = props => (
  <View>
    <Text>{JSON.stringify(props)}</Text>
  </View>
);

export default FeedItem;
