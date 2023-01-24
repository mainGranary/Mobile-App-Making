/* multiply two numbers */
/* by components */

import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

var text_st={fontSize:30, padding:10, margin:10};
var input_st={fontSize:30, borderWidth:1, padding:10, margin:10};

//걍 앱을 mult로 묶은것뿐.....
//이게..초기 결과가 0이 나오는게 맞나...?

function Mult(){
    const[A, setA]=useState(0);
    const[B, setB]=useState(0);

    return (            
    <View style={{flexDirection:"row"}}>
        <TextInput style={input_st} onChangeText={setA}/>
        <Text style={text_st}>x</Text>
        <TextInput style={input_st} onChangeText={setB}/>
        <Text style={text_st}>=</Text>
        <Text style={{fontSize:30, padding:10, margin:10, backgroundColoqar:'lightgray'}}> {Number(A)*Number(B)} </Text>
    </View>);
}

export default function App(){

    return(
        <View style={{paddingTop:30}}>
            <Mult/>
            <Mult/>
            <Mult/>
        </View>
    );
}