import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  companyListItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 70,
    gap: 10,
  },
  circleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 70,
    // backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 12,
  },
  circle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: 'gray',
    borderRadius: 25,
  },
  circleText: {
    fontSize: 21,
    fontFamily:'Roboto',
    letterSpacing: 1,
    color: 'white',
    fontWeight: '500'
  },
  listBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    width: '80%',
    gap: 5,
    // backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 12,
  },

  name: {
    fontSize: 17,
    fontWeight: '600'
  },
  nip: {
    fontSize: 13,
    fontWeight: '300'
  },

});


export default styles;
