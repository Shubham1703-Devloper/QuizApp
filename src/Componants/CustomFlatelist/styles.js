import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  Flatlist: {
    height: windowHeight - 125,
  },
  footer: {
    height: 40,
    paddingBottom: 50,
  },
  ItemStyle: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  TextViewStyle: {
    width: '95%',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  questiontext: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  togletext: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'90%',
    marginBottom:5,
  
  },
  togletextstyle:{
    color:'grey'
  },
  imageStyle: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  UpdatebuttonStyle: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#70bd5b',
  },
  profileStyle: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  DeletebuttonStyle: {
    width: '15%',
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  Deleteitem: {
    height: 100,
  },
  loadingStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  PointStyle:{
    position:'absolute',
    alignItems:'flex-end',
    bottom:0,
    right:10,
    left:0,
    top:5
  },
  Pointtext:{
    color:'grey'
  }
});
