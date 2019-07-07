import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

export default StyleSheet.create({
  storyItemContainer: {
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  avatarHasStories: {
    padding: 3,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: colors.red,
  },
  avatarSeenAllStories: {
    padding: 3,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: '#ededed',
  },
  avatarSelfNoStories: {
    padding: 3,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarNoStories: {
    padding: 3,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  plusWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 21,
    height: 21,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#3796ef',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 99,
  },
  username: {
    marginTop: 3,
    fontSize: 12,
    alignSelf: 'center',
  }
});
