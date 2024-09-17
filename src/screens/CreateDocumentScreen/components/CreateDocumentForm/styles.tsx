import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    width: '95%',
    // minHeight: '60%',
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  createDocumentForm: {
    display: 'flex',
    width: '100%',
    // height: '70%',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  pdf: {
    flex: 1,
    width: 200,
    height: 600,
    marginBottom: 20,
  },

});

export default styles;

