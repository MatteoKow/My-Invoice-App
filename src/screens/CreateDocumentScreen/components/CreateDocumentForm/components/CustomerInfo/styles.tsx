import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customerInfo: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 20,
    // minHeight: 500,
    // maxHeight: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    width: '100%',
    fontWeight: '500',
    marginBottom: 30,
  },
  box: {
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 46,
    // padding: 10,
    // backgroundColor: 'red'
  },
  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },
  dropdown: {
    // display: 'flex',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    // width: '90%',
  },
  selection: {
    fontSize: 18,
    // marginTop: 10,
  },
  add: {
    marginTop: 5,
    display: 'flex',
    // width: '10%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
  }

});

export default styles;

