/* Hello, Name (9/28, lab2+lab3) */

import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

var text_st={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10}; /*for hello ewha*/
var input_st={fontSize:30, borderWidth:1, padding:10, margin:10}; /*for input text*/

export default function App(){

    const [greet, setGreet]=useState('Hi'); /*change hello-nicetomeetyou*/
    const [name, setName]=useState('Name'); /*change your name*/

    return (
        <View style={{paddingTop:30}}>
            <Text style={text_st}> {greet}, {name}</Text> 
            <TextInput style={input_st} onChangeText={setName} /> 

            <View style={{margin:10, flexDirection:"row-reverse"}}> 
                <Button title="Nice" onPress={function() {setGreet('Nice to meet you')}} /> 
                <View style={{width:10}}></View>
                <Button title="Hello" onPress={function() {setGreet('Hello')}}/> 
            </View>
                 
        </View>
    );

}

