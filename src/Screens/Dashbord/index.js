import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  LogBox,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Checkbox, Searchbar, Text} from 'react-native-paper';
import styles from './styles';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import Update from 'react-native-vector-icons/MaterialCommunityIcons';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome6';

const instructions = [
  {id: 1, mes: 'Each question is worth 5 points.'},
  {id: 2, mes: 'For every correct answer, you will earn +5 points.'},
  {
    id: 3,
    mes: 'For every incorrect answer, you will incur a penalty of -2 points.',
  },
  {
    id: 4,
    mes: 'If you choose not to answer a question, no points will be added or deducted.',
  },
  {
    id: 5,
    mes: 'The entire quiz will have a time limit of 60 minutes (1 hour). Youmust complete all the questions within this time frame. Make sure to manage your time wisely to maximize your score.',
  },

  {id: 6, mes: 'The total marks for the quiz are 125 points.'},
  {
    id: 7,
    mes: 'The passing marks required to successfully complete the quiz are 50 points.',
  },
  {
    id: 8,
    mes: 'Please refrain from using any external aids or assistance while attempting the quiz. The purpose is to challenge your own knowledge.',
  },
 
];

const Dashbord = Props => {

  const [enable, setenable] = useState(false);
  const [update, setUpdate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isrefresh, setisrefresh] = useState(false);
  const [isnet, setisnet] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = React.useState('');

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  var a = 0;

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  useEffect(() => {
    setenable(false)
  }, []);

  const checkPress = async () => {
    setenable(!enable);
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.HeaderViewStyle}>
        <Text style={styles.HeaderTextStyle}>Quiz Rules</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>



      <View style={{flex:1}}>
      <Text style={styles.Insructions}>Please Read All Insructions:-</Text>
      <FlatList
        data={instructions}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) =>item.id}
        showsVerticalScrollIndicator={false}
      />
      </View>


      <View style={styles.Allthebest}>
        <Text style={styles.HeaderTextStyle}>ALL THE BEST</Text>
      </View>


      
      <TouchableOpacity  onPress={checkPress} style={styles.Termsandcondition}>
        <Checkbox
          onPress={checkPress}
          status={enable ? 'checked' : 'unchecked'}
        />
        <Text>Terms and conditions and privacy policy</Text>
      </TouchableOpacity>

      <View>
        <Button
          icon=""
          mode="contained"
          style={styles.buttonstyle}
          disabled={!enable}
          onPress={() => Props.navigation.navigate('AddItem_EditItem')}>
          Start Quiz
        </Button>
        
      </View>
      </ScrollView>
    </View>
  );
};

export default Dashbord;

const Item = ({item}) => {
  return (
    <View style={styles.ListItem}>
      <Icon style={styles.IconStyle} size={18} color={'red'} name={'asterisk'}/>
      <Text android_hyphenationFrequency={'full'} style={styles.itemtext}>{item.mes.split('&shy;').join('\u00AD')}</Text>
    </View>
  );
};
