import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  NativeModules,
  PermissionsAndroid,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import {Button, Text} from 'react-native-paper';
import {TouchEventType} from 'react-native-gesture-handler/lib/typescript/TouchEventType';
import Upload from 'react-native-vector-icons/MaterialCommunityIcons';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import CustomFlatelist from '../../Componants/CustomFlatelist';
import PaginationDot from 'react-native-animated-pagination-dot';
import RNRestart from 'react-native-restart';
import { StackActions } from '@react-navigation/native';

const EndQuiz = Props => {
  const [scror, setScror] = useState(0);
  const [Atemp, setAtemp] = useState(0);
  const [totalques, setTotalques] = useState(0);
  const [wrongq, setWrongq] = useState(0);
  const [isExploding, setIsExploding] = React.useState(false);

  var newdata = Props.route.params.newdata;
  var checkeditem = Props.route.params.checkeditem
  var windowswitch = Props.route.params.windowswitch
console.log('dataitems================>',Props.route.params)
  useEffect(() => {
    if (checkeditem.length > 0) {
      var Atempques = checkeditem.length;
      var total = newdata.length;
      setAtemp(Atempques);
      setTotalques(total);
      setIsExploding(true);

      // var b = scror-2;
      var c = 0;
      var a = 0;
      var wrong = 0;
      newdata.forEach(elem => {
        checkeditem.forEach(val => {
          if (elem.id == val.id) {
            if (val.checked == elem.rightAns) {
              a += 5;
            } else {
              a -= 2;
              wrong += 1;
            }
            // else{
            //   setScror(b);
            // }
            // setScror(scror + a);

            // console.log(val,'props.route.params=====>', elem);
          }
        });
      });
      console.log('props.route.params=====>', a);
      setWrongq(wrong);
      setScror(a);
    }
  }, []);

  console.log(scror, 'kjgkjfkg', totalques, 'jfkgjkfgj', Atemp);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    if (Props.navigation.isFocused()) {
      Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.HeaderViewStyle}>
        <TouchableOpacity onPress={() => {}}>
          <BackIcon name={''} size={30} color={'black'} />
        </TouchableOpacity>

        <Text style={styles.HeaderTextStyle}>Your Results</Text>

        <TouchableOpacity onPress={() => {}}>
          <BackIcon name={''} size={30} color={'black'} />
        </TouchableOpacity>
      </View>

      <View style={styles.CenterText}>
        <Text style={scror > 50 ? styles.statusStyle : styles.Redtext}>
          {scror > 50 ? 'Conratulation! You have Passed' : 'Sorry! Fail'}
        </Text>
        {scror > 50 ? (
          <Image
            resizeMode="contain"
            style={{width: 250, height: 200}}
            source={require('./emojisky.png')}
          />
        ) : (
          <Image
            resizeMode="contain"
            style={{width: 200, height: 250}}
            source={require('./face-with-tears-of-joy-emoji-crying-emoticon-smiley-emoji-face-ad8c3d9db0e7ff714d970dbd87a05870.png')}
          />
        )}

        <View style={styles.Atemptext}>
          <Text style={styles.ScrorTextStyle}>
            Your Scror: {scror}
          </Text>
          <Text style={styles.ScrorTextStyle}>
            Atemp Questions: {Atemp}/{newdata.length}
          </Text>
          <Text style={styles.ScrorTextStyle}>Right Questions: {Atemp-wrongq} </Text>
          <Text style={styles.ScrorTextStyle}>Wrong Questions: {wrongq} </Text>
          <Text style={styles.ScrorTextStyle}>Window Change: {windowswitch?windowswitch:0} </Text>
        </View>

        {/* <View> */}
          {/* <Button
            icon=""
            mode="contained"
            onPress={() => {
              Props.navigation.navigate('Dashbord');
            }}>
            Start Quiz Again
          </Button>
        </View> */}
      </View>
    </View>
  );
};

export default EndQuiz;
