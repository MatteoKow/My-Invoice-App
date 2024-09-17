import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  productListItem: {
    display: 'flex',
    width: '100%',
    height: 160,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  box: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'yellow'

  },
  conatinerItem: {
    display: 'flex',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'yellow'
    gap: 15,

    
  },
  itemName: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  itemPrice: {
    display: 'flex',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 2,
    gap: 10,

  },
  item:{
    display: 'flex',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  inputName: {
    display: 'flex',
    width: '100%',
    height: 30,
    shadowColor: 'rgba(66, 68, 90, 1)',
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.5,
    shadowRadius: 2, 
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
  },

  input: {
    display: 'flex',
    width: '100%',
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
  },

  select: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  remove: {
    display: 'flex',
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  labelName: {
    paddingLeft: 20,
    fontWeight: '600',
  },
  label: {
    fontWeight: '600',
  },

});

export default styles;

