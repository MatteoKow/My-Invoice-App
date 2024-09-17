import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productInfo: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    width: '100%',
    fontWeight: '500',
    marginBottom: 30,
  },
  container: {
    flex: 1,

    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  dropdown: {
    // display: 'flex',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    // width: '90%',
  },
  selection: {
    fontSize: 18,
    marginTop: 10,
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 30
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
  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'red'
  },

});

export default styles;

