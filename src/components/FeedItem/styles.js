import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  postHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    marginRight: 5,
    borderWidth: 0,
    borderRadius: 50,
  },
  username: {
    fontWeight: 'bold',
    color: colors.black,
  },
  options: {
    marginLeft: 'auto',
    marginRight: 5
  },
  photoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  photo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 350,
  },
  bigLike: {
    textShadowColor: '#eee',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 2,
    textShadowRadius: 3.84,
    elevation: 5,
  },
  interactionsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  interactionIcon: {
    marginRight: 10,
  },
  isBookmarkIcon: {
    marginLeft: 'auto',
  },
  postFooter: {
    marginRight: 10,
    marginLeft: 10,
  },
  likeCounter: {
    fontWeight: 'bold',
    color: colors.black,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerUsername: {
    paddingRight: 5,
    fontWeight: 'bold',
    color: colors.black,
  },
  description: {
    color: colors.black,
  },
  date: {
    marginTop: 5,
    fontSize: 12,
  }
});
