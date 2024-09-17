import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    minHeight: '85%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    paddingHorizontal: 15,
  },
});

export default styles;