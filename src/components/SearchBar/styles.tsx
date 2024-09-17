import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#c7c7c7',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    width: '75%',
  },
  icon: {
    maxHeight: '50%',
    width: 50,
    aspectRatio: 1, 
  }

});

export default styles;
