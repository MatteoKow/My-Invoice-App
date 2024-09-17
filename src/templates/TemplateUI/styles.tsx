import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#f5f3f0',
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 120,
  },
  circle: {  
    position: 'absolute',
    backgroundColor: 'black',
    width: '120%',
    height: 200,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  content: {
    // position: 'absolute',
    display: 'flex',
    width: '95%',
    minHeight: '85%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 

  },
});

export default styles;