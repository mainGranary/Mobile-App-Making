import React, { useState } from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {Audio} from 'expo-av';

async function play00(){
    var s=await Audio.Sound.createAsync(require('./assets/note00.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}

export default function App(){
    return (
        <View style={{paddingTop:50}}>
            <View onTouchStart={play00}>
                <Text style={{fontSize:30}}>Do</Text>
            </View>
        </View>
    )
}