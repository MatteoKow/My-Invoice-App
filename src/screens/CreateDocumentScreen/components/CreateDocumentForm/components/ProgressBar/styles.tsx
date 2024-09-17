import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
progressBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    height: 80,
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: 40,
    height: 40,
    backgroundColor: 'rgb(234, 234, 234)',
    borderRadius: 20,
    fontSize: 20
  },
  insideCircle: {
    color: 'black',
  },
  insideCircleActive: {
    color: 'white',
  },
  circleActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    fontSize: 20,
  },

  line: {
    display: 'flex',
    width: 40,
    height: 5,
    borderRadius: 5,
    fontSize: 20,
    marginHorizontal: 5,
    backgroundColor: 'rgb(234, 234, 234)'
  },

  lineActive: {
    display: 'flex',
    width: 40,
    height: 5,
    borderRadius: 5,
    fontSize: 20,
    marginHorizontal: 5,
    backgroundColor: 'black'
  },



});

export default styles;

