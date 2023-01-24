import React, { useState } from 'react';
import {Text, View, Button, TextInput } from 'react-native';

var text_st={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var input_st={fontSize:30, borderWidth:1, padding:10, margin:10};

export default function App(){

    const [greet, setGreet]=useState('Hi');
    const [name, setName]=useState('Name');

    return (
        <View style={{paddingTop:30}}>
            <Text style={text_st}>{greet}, {name}</Text>
            <TextInput style={input_st} onChangeText={ setName } />

            <View style={{margin:10, flexDirection:"row-reverse"}}>
                <Button title="Nice" onPress={function(){ setGreet('Nice to meet you')}}/>
                <View style={{width:10}}/>
                <Button title="Hello" onPress={function() {setGreet('Hello')}}/>
            </View>        
        </View>
    );
}