import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  AppState,
  BackHandler,
  FlatList,
  Image,
  PermissionsAndroid,
  Pressable,
  ScrollView,
  StatusBar,
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
import CountDown from 'react-native-countdown-component';

const newdata = [
  {
    id: 1,
    no: 1,
    question: 'To update react native with latest version what will you use?',
    option1: 'both',
    option2: 'none',
    option3: 'react-native init',
    option4: 'react-native upgrade',
    check: 'false',
    rightAns: '4',
  },
  {
    id: 2,
    no: 2,
    question: 'Which statement is true for props?',
    option1: 'can be modified',
    option2: 'it is set and updated by the object',
    option3: 'it is mutual',
    option4: 'can’t be modified',
    check: 'false',
    rightAns: '4',
  },

  {
    id: 3,
    no: 3,
    question:
      'Which module is used for making network requests in React Native?',
    option1: 'fetch',
    option2: 'axios',
    option3: 'network',
    option4: 'http',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 4,
    no: 4,
    question: 'How do you style components in React Native?',
    option1: 'Using HTML and CSS',
    option2: 'Inline styles like React',
    option3: 'External CSS files',
    option4: 'Using Flexbox and inline styles',
    check: 'false',
    rightAns: '4',
  },
  {
    id: 5,
    no: 5,
    question:
      'Which of the following is NOT a valid styling unit in React Native?',
    option1: 'px',
    option2: 'dp',
    option3: '%',
    option4: 'rem',
    check: 'false',
    rightAns: '4',
  },
  {
    id: 6,
    no: 6,
    question:
      'Which module is used for navigation in React Native when using the react-navigation library?',
    option1: 'react-native-navigation',
    option2: 'navigation-react-native',
    option3: 'navigators',
    option4: '@react-navigation',
    check: 'false',
    rightAns: '4',
  },

  {
    id: 7,
    no: 7,
    question: 'What is the role of the useEffect hook in React Native?',
    option1: 'To create custom hooks',
    option2: 'To handle side effects in functional components',
    option3: 'To define navigation actions',
    option4: 'To manage local storage',
    check: 'false',
    rightAns: '2',
  },
  {
    id: 8,
    no: 8,
    question:
      'In React Native, which component is used to create a navigation drawer?',
    option1: '<NavigationDrawer>',
    option2: '<DrawerNavigation>',
    option3: '<AppDrawer>',
    option4: '<DrawerLayoutAndroid>',
    check: 'false',
    rightAns: '4',
  },
  {
    id: 9,
    no: 9,
    question: 'What is the purpose of the react-native-reanimated library?',
    option1: 'Animation and gesture handling',
    option2: 'Data storage and retrieval',
    option3: 'Internationalization and localization',
    option4: 'State management',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 10,
    no: 10,
    question:
      'Which library can be used to manage state in a React Native application with complex logic and multiple reducers?',
    option1: 'redux',
    option2: 'mobx',
    option3: 'flux',
    option4: 'context-api',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 11,
    no: 11,
    question:
      'What is the purpose of the react-native-gesture-handler library?',
    option1: 'To handle user gestures and touch interactions',
    option2: 'To manage data storage and retrieval',
    option3: 'To handle network requests',
    option4: 'To create custom animations',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 12,
    no: 12,
    question: 'How can you enable hot reloading in a React Native project?',
    option1: 'Its enabled by default',
    option2: 'Installing the react-hot-loader package',
    option3: 'Using the HotReload component',
    option4: 'Shaking the physical device',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 13,
    no: 13,
    question: 'What is the purpose of the react-native-code-push library?',
    option1:
      'To push code updates to the app without going through the app store review process',
    option2: 'To optimize the apps codebase for performance',
    option3: 'To provide access to native device APIs',
    option4: 'To manage navigation between screens',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 14,
    no: 14,
    question: 'What is the role of the react-native-keychain library?',
    option1: 'To manage and securely store sensitive data like passwords',
    option2: 'To handle navigation between screens',
    option3: 'To create custom animations',
    option4: 'To optimize images for better performance',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 15,
    no: 15,
    question: 'What does the following code snippet output? "console.log(typeof typeof 1);" ',
    option1: 'number',
    option2: 'string',
    option3: 'undefined',
    option4: 'object',
    check: 'false',
    rightAns: '2',
  },

  {
    id: 16,
    no: 16,
    question: 'What does the "===" operator check for?',
    option1: 'Equality, without type conversion',
    option2: 'Equality, with type conversion',
    option3: 'Assignment',
    option4: 'Comparison of references',
    check: 'false',
    rightAns: '1',
  },


  {
    id: 17,
    no: 17,
    question: 'What is the output of the following code? "console.log(typeof null);" ',
    option1: 'null',
    option2: 'undefined',
    option3: 'object',
    option4: 'string',
    check: 'false',
    rightAns: '3',
  },

  {
    id: 18,
    no: 18,
    question: 'What will the code below output to the console? "console.log(1 + "1" - 1);"    ',
    option1: '10',
    option2: '"10"',
    option3: '11',
    option4: '1',
    check: 'false',
    rightAns: '1',
  },

  {
    id: 19,
    no: 19,
    question: ' What is the output of the following code? "console.log(typeof []);"',
    option1: 'array',
    option2: 'object',
    option3: 'array-like',
    option4: 'undefined',
    check: 'false',
    rightAns: '2',
  },


  {
    id: 20,
    no: 20,
    question: 'What is the output of the following code? "console.log("1" - - "1");"',
    option1: '0',
    option2: '1',
    option3: '2',
    option4: '"11"',
    check: 'false',
    rightAns: '2',
  },

  {
    id: 21,
    no: 21,
    question: 'How can you deep clone an object in JavaScript?',
    option1: 'Using the "Object.copy()" method',
    option2: 'Using the "Object.clone()" method.',
    option3: 'Using the "JSON.parse()" and "JSON.stringify()" methods.',
    option4: 'Using the "Object.assign()" method.',
    check: 'false',
    rightAns: '3',
  },

  {
    id: 22,
    no: 22,
    question: 'How can you determine if a variable is an array in JavaScript?',
    option1: 'Using the "isArray()" method.',
    option2: 'Using the "isTypeOf()" method.',
    option3: 'Using the "getType()" method.',
    option4: 'Using the "instanceof Array" operator.',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 23,
    no: 23,
    question: 'What is the purpose of the let keyword in JavaScript?',
    option1: 'It defines a variable with block scope.',
    option2: 'It defines a global variable.',
    option3: 'It defines a function scope variable.',
    option4: 'It defines a variable with constant value.',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 24,
    no: 24,
    question: 'What is the output of the following code? "console.log(typeof NaN);"',
    option1: 'number',
    option2: 'NaN',
    option3: 'undefined',
    option4: 'string',
    check: 'false',
    rightAns: '1',
  },
  {
    id: 25,
    no: 25,
    question: 'What is the output of the following code? "console.log(true + true);"',
    option1: '2',
    option2: '1',
    option3: 'true',
    option4: 'undefined',
    check: 'false',
    rightAns: '2',
  },


];

const AddItem_EditItem = Props => {
  const [value, setvalue] = useState({});
  const [page, setpage] = useState(0);
  const [list, setList] = useState([]);
  const [checkeditem, setcheckeditem] = useState([]);
  const [start, setstart] = useState(0);
  const [end, setend] = useState(0);
  const [windowswitch, setwindowswitch] = useState(0);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  var currentPage = 0;
  var startingIndex = 0;
  var endingIndex = 5;
  var data = [];

  useEffect(() => {
    setcheckeditem([]);
    setstart(0);
    setend(5);
    setpage(0);
    data = newdata.slice(startingIndex, endingIndex);
    setList(data);
  }, []);

  const Next = () => {
    var startindex = start;
    var endindex = end;
    if (startindex >= 0 && endindex < 25) {
      var currentPage = page + 1;
      startindex = startindex + 5;
      endindex = endindex + 5;
      setend(endindex);
      setstart(startindex);
      console.log('next', startindex, endindex);
      data = newdata.slice(startindex, endindex);
      setpage(currentPage);
      setList(data);
    }
  };

  const Previous = () => {
    var startindex = start;
    var endindex = end;
    if (startindex > 0 && endindex <=25) {
      var currentPage = page - 1;
      startindex = startindex - 5;
      endindex = endindex - 5;
      setend(endindex);
      setstart(startindex);
      console.log('prevous', startindex, endindex);
      data = newdata.slice(startindex, endindex);
      setpage(currentPage);
      setList(data);
    }
  };

  console.log('checkitem=====>', checkeditem);
  console.log('setwindowswitch=======>', windowswitch);

  const Timeover = () => {
    setTimeout(() => {
      Props.navigation.navigate('EndQuiz', {
        windowswitch,
        checkeditem,
        newdata,
      });
    }, 2000);
  };

  const Finish = () => {
    Props.navigation.navigate('EndQuiz', {windowswitch, checkeditem, newdata});
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    if (Props.navigation.isFocused()) {
      Alert.alert('Hold on!', 'Are you sure you want to Cancel Quiz?', [
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

  useEffect(() => {
    var countwindow = 0;
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        // appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        
        if (countwindow > 2) {
          Finish()
        } else {

          if(countwindow!=0){
            Alert.alert(
              'Warning ' + countwindow,
              'Attension! Please Not Switch Window Otherwose Quiz Auto Submit',
            );
          } 
        }
        countwindow += 1;
        setwindowswitch(countwindow);
       
      } else {
        console.log('App is in background');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      // console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.maincontainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.HeaderViewStyle}>
        <Text style={styles.HeaderTextStyle}>React Native Quiz</Text>
        <CountDown
          size={12}
          until={3600}
          onFinish={() => Timeover()}
          digitStyle={{backgroundColor: '#FFF'}}
          digitTxtStyle={{color: 'black'}}
          timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
          // separatorStyle={{color: '#1CC625'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
          
        />
      </View>

      <CustomFlatelist
        checkeditem={checkeditem}
        setcheckeditem={setcheckeditem}
        data={list}
        page={page}
        setList={setList}
        value={value}
      />

      <View style={styles.BottombuttonView}>
        {page > 0 ? (
          <Button
            mode="contained"
            style={styles.buttonstyle}
            onPress={Previous}>
            {'Back'}
          </Button>
        ) : (
          <View style={{width: '22%'}}></View>
        )}

        <PaginationDot
          activeDotColor={'black'}
          curPage={page}
          maxPage={Math.ceil(newdata.length / 5)}
        />
        {page+1 < Math.ceil(newdata.length / 5) ? (
          <Button mode="contained" style={styles.buttonstyle} onPress={Next}>
            {'Next'}
          </Button>
        ) : (
          <Button mode="contained" style={styles.buttonstyle} onPress={Finish}>
            {'Done'}
          </Button>
        )}
      </View>
    </View>
  );
};

export default AddItem_EditItem;
