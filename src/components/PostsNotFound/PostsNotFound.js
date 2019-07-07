import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const PostsNotFound = props => (
  <View style={styles.container}>
    <Text style={styles.text}>No posts found :(</Text>
  </View>
);

export default PostsNotFound;
