import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  customerItem: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
    padding: 15,
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    backgroundColor: 'white',
    borderRadius: 20,
    // marginTop: 20,
    // marginBottom: 20,
  },
  row: {
    display: 'flex',
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    display: 'flex',
    maxWidth: 200,
    height: 30,
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    fontWeight: '300',
  },
  label: {
    // width: 120,
    fontSize: 16,
    fontWeight: '500',
  },
  remove: {
    display: 'flex',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  }

});

export default styles;

