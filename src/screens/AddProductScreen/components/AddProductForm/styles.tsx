import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '95%',
    // minHeight: '85%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    marginTop: 30,
    backgroundColor: 'black',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  }

});

export default styles;