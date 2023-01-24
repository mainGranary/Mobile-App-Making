import React, { useState } from 'react';
import {Text, View, Button, TextInput } from 'react-native';

var text_st={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var input_st={fontSize:30, borderWidth:1, padding:10, margin:10};

export default function App(){

    const [A, setA] = useState(0);
    const [B, setB] = useState(0);

    return (
        <View style={{paddingTop:30}}>
            <View style={{flexDirection:"row"}}>
                <Text style={text_st}>{A}</Text>
                <Text style={{padding:10, margin:10, fontSize:30}}>{"  X  "}</Text>
                <Text style={text_st}>{B}</Text>
                <Text style={{paddng:10, margin:10, fontSize:30}}>{"  =  "}</Text>
                <Text style={text_st}>{A*B}</Text>
            </View>

            <View>
                <Text style={text_st}>{A} x {B} = {A*B}</Text>
            </View>

            <View style={{margin:10, flexDirection:"row"}}>
                <View>
                    <Button title="  +  " onPress={function(){setA(A+1)}}/>
                    <View style={{height:10}}/>
                    <Button title="  -  " onPress={function(){setA(A-1)}}/>
                </View>
                <View style={{width:10}}/>
                <View>
                    <Button title="  +  " onPress={function(){setB(B+1)}}/>
                    <View style={{height:10}}/>
                    <Button title="  -  " onPress={function(){setB(B-1)}}/>
                </View>                
            </View>
        </View>
    );
}