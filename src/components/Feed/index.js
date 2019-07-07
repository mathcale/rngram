import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import FeedItem from '../FeedItem';
import StoriesList from '../StoriesList';
import PostsNotFound from '../PostsNotFound';

import { feed } from '../../mocks';

const Feed = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(feed);
  }, []);

  return (
    <ScrollView>
      <StoriesList />

      {posts.length > 0 ?
        posts.map(post => (
          <FeedItem key={post.id} post={post} />
        ))
      :
        <PostsNotFound />
      }
    </ScrollView>
  );
}

export default Feed;
