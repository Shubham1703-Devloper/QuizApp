import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal:15
  },
  Termsandcondition: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderTextStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  Allthebest: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:40
  },
  HeaderViewStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: 'row',
  },

  itemtext: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginVertical: 5,
    textAlign: 'justify',
    width: '95%',
    lineHeight: 25,
  },
  ListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 2,
  },
  IconStyle: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonstyle: {
    borderRadius: 10,
    marginBottom: 60,
  },
  Insructions: {
    fontSize: 18,
    color: 'red',
  },
});
