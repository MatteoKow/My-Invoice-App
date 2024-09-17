import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    position: 'static',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
    width: 40,
    height: 40,
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 0.5,
    color: 'white',
  },
  arrow: {
    display: 'flex',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;