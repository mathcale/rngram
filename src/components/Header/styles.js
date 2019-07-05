import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  logo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.black,
  }
});
