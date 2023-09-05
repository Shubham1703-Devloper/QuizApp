import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import {Button, RadioButton, Searchbar} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import styles from './styles';

const CustomFlatelist = ({
  checkeditem,
  setcheckeditem,
  page,
  setFieldValue,
  setList,
  data,
  ...res
}) => {
  console.log('chek----', checkeditem);
  const flatListRef = React.useRef();
  useEffect(() => {
    toTop();
    var newdata = [...data];
    newdata.forEach(elem => {
      if (checkeditem.length > 0) {
        checkeditem.forEach(val => {
          if (elem.id == val.id) {
            var index = newdata.indexOf(elem);
            newdata[index].check = val.checked;
          }
        });
      }
    });
    console.log('aaaaaaaaaaaaaaa', newdata);
    setList([...newdata]);
  }, [page]);

  const toTop = () => {
    // use current
    flatListRef.current.scrollToOffset({animated: false, offset: 0});
  };
  // setcheckeditem(c)
  return (
    <View style={styles.Flatlist}>
      <FlatList
        data={data}
        // initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={styles.footer}></View>}
        renderItem={({item}) => (
          <Item
            checkeditem={checkeditem}
            setcheckeditem={setcheckeditem}
            setFieldValue={setFieldValue}
            onPress={() => {}}
            item={item}
          />
        )}
        ref={flatListRef}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CustomFlatelist;

const Item = ({item, checkeditem}) => {
  const [checked, setChecked] = React.useState({'first':'',second:'',third:'',forth:''});
  const [value, setvalue] = useState(false);
  var check = {ques: '', checked: '', id: ''};
  var bool = false;

  const onchange = a => {
    setvalue(a);
    check = {ques: item.no, checked: a, id: item.id};
    if (checkeditem.length > 0) {
      for (let elem of checkeditem) {
        if (elem.ques == check.ques) {
          var index = checkeditem.indexOf(elem);
          checkeditem[index] = check;
          bool = true;
        }
      }
    }
    if (bool != true) {
      checkeditem.push(check);
      bool = false;
    }

    console.log('item===', checkeditem);
  };
  var obj = {'first':'',second:'',third:'',forth:''}
  const Togalon=(val)=>{
    switch(val){
      case "first":obj['first']=val;break;
      case "second":obj['second']=val;break;
      case "third":obj['third']=val;break;
      case "forth":obj['forth']=val;break;
      default:console.warn("wrong");
  
    }

    setChecked(obj)
    console.log(checked);
  }

  return (
    <View>
      <View style={styles.ItemStyle}>
        <View style={styles.PointStyle}>
          <Text style={styles.Pointtext}>+5</Text>
        </View>
        <View style={styles.TextViewStyle}>
          <Text style={styles.questiontext}>
            {item.no + '. ' + item.question}
          </Text>
          {!item.singleselect ? (
            <RadioButton.Group
              onValueChange={value => onchange(value)}
              value={value ? value : item.check}>
              <View style={styles.togletext}>
                <RadioButton value="1" />
                <Text style={styles.togletextstyle}>{item.option1}</Text>
              </View>
              <View style={styles.togletext}>
                <RadioButton value="2"/>
                <Text style={styles.togletextstyle}>{item.option2}</Text>
              </View>
              <View style={styles.togletext}>
                <RadioButton value="3" />
                <Text style={styles.togletextstyle}>{item.option3}</Text>
              </View>
              <View style={styles.togletext}>
                <RadioButton value="4" />
                <Text style={styles.togletextstyle}>{item.option4}</Text>
              </View>
            </RadioButton.Group>
          ) : (
            <View>
              <View style={styles.togletext}>
                <RadioButton
                  value={'1'}
                  status={checked.first === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => Togalon('first')}
                />
                <Text>{item.option1}</Text>
              </View>
              <View style={styles.togletext}>
                <RadioButton
                  value="2"
                  status={checked.second === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => Togalon('second')}
                />
                <Text>{item.option2}</Text>
              </View>
              <View style={styles.togletext}>
                <RadioButton
                  value="3"
                  status={checked.third === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => Togalon('third')}
                />
                <Text>{item.option3}</Text>
              </View>
              <View style={styles.togletext}>
                <RadioButton
                  value="4"
                  status={checked.forth === 'forth' ? 'checked' : 'unchecked'}
                  onPress={() => Togalon('forth')}
                />
                <Text>{item.option4}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
