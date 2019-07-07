import React from 'react';
import { ScrollView } from 'react-native';

import StoryItem from '../StoryItem';
import { stories } from '../../mocks';

import styles from './styles';

const StoriesList = props => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.storiesListContainer}>
      <StoryItem self story={stories.selfStories} />

      {(stories.followingStories !== null && stories.followingStories.length > 0) &&
        stories.followingStories.map((story, i) => (
          <StoryItem key={i} story={story} />
        ))
      }
    </ScrollView>
  );
}

export default StoriesList;
