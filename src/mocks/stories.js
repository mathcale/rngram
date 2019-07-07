import moment from 'moment';

export default {
  selfStories: {
    user: {
      avatar: 'avatar.jpg',
    },
    stories: [],
    seenAll: true
  },
  followingStories: [
    {
      user: {
        username: 'japassou',
        avatar: 'avatar-2.png',
      },
      stories: [
        {
          photo: 'mock-story-1.jpg',
          ttl: moment().add('24', 'hours'),
          options: {
            canComment: true,
            canShare: true,
          },
          link: {
            has: false
          },
          seen: false,
        }
      ],
      seenAll: false,
    },
    {
      user: {
        username: 'reactjs',
        avatar: 'avatar-3.png',
      },
      stories: [
        {
          photo: 'mock-story-2.jpg',
          ttl: moment().add('24', 'hours'),
          options: {
            canComment: true,
            canShare: true,
          },
          link: {
            has: false
          },
          seen: false,
        }
      ],
      seenAll: true,
    },
  ],
};
