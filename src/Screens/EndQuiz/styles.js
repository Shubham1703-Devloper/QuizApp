import {StyleSheet} from 'react-native';
// import Config from "react-native-config";

export default styles = StyleSheet.create({
  maincontainer: {
    padding: 20,
    flex: 1,
    paddingBottom: 120,
  },
  HeaderTextStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  HeaderViewStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    flexDirection: 'row',
  },
  UploadbuttonStyle: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#70bd5b',
  },
  ScrorTextStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  statusStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
  },
  Redtext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  CenterText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  Atemptext: {
    marginVertical: 20,
    marginBottom: 50,
    alignItems: 'center',
  },
});
