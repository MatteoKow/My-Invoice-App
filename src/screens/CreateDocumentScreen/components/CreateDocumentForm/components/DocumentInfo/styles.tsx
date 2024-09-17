import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customerInfo: {
    display: 'flex',
    // justifyContent: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 20
  },
  inputBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 80,
    width: '100%',
    gap: 5,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 12,
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 

  },
  name: {
    height: 20,
    color: 'black',
    // backgroundColor: 'red',
  },
  input: {
    height: 20,
    color: 'black',
    width: '100%',
  },
  invoiceNumberContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: 50,
    width: '100%',
  },
  invoiceInput: {
    display: 'flex',
    width: 50,
    height: 30,
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black',
    borderRadius: 8,
    marginLeft: 5,
  },
  invoiceNumberBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  invoiceNumber: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },

});

export default styles;

