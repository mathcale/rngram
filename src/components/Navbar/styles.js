import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

export default StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 50,
    backgroundColor: colors.lighGray,
    borderTopWidth: 1,
    borderTopColor: colors.gray,
  },
  navbarItem: {},
});
