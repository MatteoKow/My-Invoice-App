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

  input: {
    height: 40,
    borderColor: '#ddd',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 12,
    marginLeft:10,
    marginRight: 10,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  circle: {
    backgroundColor: 'red',
    height: 80,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default styles;