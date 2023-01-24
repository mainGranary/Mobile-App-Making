/* counter app */

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

var text_st={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var text_op={fontSize:30, padding:10, margin:10};
var a = 0;
var b=0;

export default function App() {

  const [A, setA]=useState(0);
  const [B, setB]=useState(0);

  return (
    <View style={{paddingTop:30}}>

      <View style={{flexDirection:"row"}}>
        <Text style={text_st}>{A}</Text>
        <Text style={text_op}>{" x "} </Text>
        <Text style={text_st}>{B}</Text>
        <Text style={text_op}>{" = "} </Text>
        <Text style={text_st}>{A*B}</Text>
      </View>

      <View style={{padding:10, margin:10, flexDirection:"row"}}>
        <Button title="  +  " onPress={function() {setA(A+1)}}/>
        <View style={{width:20}}></View>
        <Button title="  +  " onPress={function() {setB(B+1)}}/>
      </View>

      <View style={{padding:10, margin:10, flexDirection:"row"}}>
        <Button title="  -  " onPress={function() {setA(A-1)}}/>
        <View style={{width:20}}></View>
        <Button title="  -  " onPress={function() {setB(B-1)}}/>
      </View>



    





      {/* <Text style={text_st}> {val} </Text>

      <Button title="Count Up"
        onPress={function() {setval(val+1)}}/>

      <View style={{height:10}}></View> 

      <Button title="Count Down"
        onPress={function() {setval(val-1)}}/> */}

        



    </View>
  );
}
