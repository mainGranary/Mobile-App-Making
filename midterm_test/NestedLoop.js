import React, { useState } from 'react';
import {Text, View, Button, TextInput,ImageBackground} from 'react-native';
import {Audio} from 'expo-av';

// box in box ex

var L=[];

//중첩반복문 사용해서
for(var i=2; i<=9; i++){
    for(var j=1; j<=9; j++){
        L.push(<Text>{i} x {j} = {i*j}</Text>)
    }
} //거듭제곱값 차곡차곡 push

export default function App(){
    return (
        <View style={{marginTop:30}}>
            {L}
        </View>
    )
}