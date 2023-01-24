import React, { useState } from 'react';
import {Text, View, Button, TextInput,ImageBackground} from 'react-native';
import {Audio} from 'expo-av';

var key_st={flex:1, margin:5, backgroundColor:'rgba(100,100,100, 0.2)'};

async function play00(){
    var s=await Audio.Sound.createAsync(require('./assets/note00.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}
async function play02(){
    var s=await Audio.Sound.createAsync(require('./assets/note02.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}
async function play04(){
    var s=await Audio.Sound.createAsync(require('./assets/note04.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}
async function play05(){
    var s=await Audio.Sound.createAsync(require('./assets/note05.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}
async function play07(){
    var s=await Audio.Sound.createAsync(require('./assets/note07.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}
async function play09(){
    var s=await Audio.Sound.createAsync(require('./assets/note09.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}
async function play11(){
    var s=await Audio.Sound.createAsync(require('./assets/note11.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}
async function play12(){
    var s=await Audio.Sound.createAsync(require('./assets/note12.m4a')); //기다려!!!!!
    s.sound.playAsync(); //마지막이기 때문에 await 안 붙여도 상관 없다.
}

export default function App(){

    const [k1, setk1]=useState(0);
    const [k2, setk2]=useState(0);

    return (
        <View style={{flex:1,marginTop:30}}>
            <ImageBackground style={{height:'100%', width:'100%'}} resizeMode="stretch" source={require('./assets/keyboard.png')}>
                <View style={key_st} opacity={k1} 
                        onTouchStart={function(){play00(); setk1(1)}} 
                        onTouchEnd={function() {setk1(0)}}/>

                <View style={key_st} opacity={k2} 
                        onTouchStart={function(){play02(); setk2(1)}} 
                        onTouchEnd={function() {setk2(0)}}/>

                <View style={key_st} onTouchStart={play04}></View>
                <View style={key_st} onTouchStart={play05}></View>
                <View style={key_st} onTouchStart={play07}></View>
                <View style={key_st} onTouchStart={play09}></View>
                <View style={key_st} onTouchStart={play11}></View>
                <View style={key_st} onTouchStart={play12}></View>
            </ImageBackground>
        </View>
    )
}