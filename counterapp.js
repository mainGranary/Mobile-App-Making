/* counter app */

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

var text_st={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};

var a = 0;
export default function App() {

  const [val, setval]=useState(0);

  return (
    <View style={{paddingTop:30}}> 

      <Text style={text_st}> {val} </Text>

      <Button title="Count Up"
        onPress={function() {setval(val+1)}}/>

      <View style={{height:10}}></View> 

      <Button title="Count Down"
        onPress={function() {setval(val-1)}}/>

        



    </View>
  );
}
