import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  }

});

export default styles;
