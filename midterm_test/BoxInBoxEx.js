import React, { useState } from 'react';
import {Text, View, Button, TextInput,ImageBackground} from 'react-native';
import {Audio} from 'expo-av';

// box in box ex

var name='Ewha';
var element=<Text>Hello {name}</Text>

element=<View style={{borderWidth:1, padding:10}}>{element}</View>
element=<View style={{borderWidth:1, padding:10}}>{element}</View>

for(var i=0; i<5; i++){
    element=<View style={{borderWidth:1, padding:10}}>{element}</View>
}

export default function App(){
    return (
        <View style={{marginTop:30}}>{element}
        </View>
    )
}