import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import FeedItem from '../FeedItem';

const Feed = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        user: { username: 'cale_matheus', avatar: 'avatar.png', hasStories: false },
        photo: 'mock-posts-1.jpg',
        stats: {
          description: 'Cabana',
          likes: 1500,
          comments: 182
        },
        posted_at: '2 dias atrás'
      }
    ])
  }, [])

  return (
    <ScrollView>
      {posts.map(post => (
        <FeedItem key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}

export default Feed;
