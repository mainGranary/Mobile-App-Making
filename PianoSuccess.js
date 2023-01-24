import React, {useState} from 'react';
import {View, Button, Text, ImageBackground} from 'react-native'; //ImageBackground import 하는거 잊지말기 !! 
import {Audio} from 'expo-av';

async function play00(){
    console.log("Loading Sound");
    var s=await Audio.Sound.createAsync(require('./assets/note00.m4a')); //원래는 이거를 함수 밖에서 빼야함 ㅠㅠ 로드 계속 시키니까..안쓰면 쓰레기처리해서 파일이..사라져요 안드로이드는 그래.. ㅂㅅ새끼
    console.log("Playing Sound");
    s.sound.playAsync();
}

async function play02(){
    var s=await Audio.Sound.createAsync(require('./assets/note02.m4a'));
    s.sound.playAsync();
}

async function play04(){
    var s=await Audio.Sound.createAsync(require('./assets/note04.m4a'));
    s.sound.playAsync();
}

async function play05(){
    var s=await Audio.Sound.createAsync(require('./assets/note05.m4a'));
    s.sound.playAsync();
}

async function play07(){
    var s=await Audio.Sound.createAsync(require('./assets/note07.m4a'));
    s.sound.playAsync();
}

async function play09(){
    var s=await Audio.Sound.createAsync(require('./assets/note09.m4a'));
    s.sound.playAsync();
}

async function play11(){
    var s=await Audio.Sound.createAsync(require('./assets/note11.m4a'));
    s.sound.playAsync();
}

async function play12(){
    var s=await Audio.Sound.createAsync(require('./assets/note12.m4a'));
    s.sound.playAsync();
}

var key_st={flex:1, margin:5, backgroundColor:'rgba(100, 100, 100, 0.2)'};

export default function App(){

    const [k1, setk1]=useState(0);
    const [k2, setk2]=useState(0);
    const [k3, setk3]=useState(0);
    const [k4, setk4]=useState(0);
    const [k5, setk5]=useState(0);
    const [k6, setk6]=useState(0);
    const [k7, setk7]=useState(0);
    const [k8, setk8]=useState(0);


    return (
        <View style={{flex:1, marginTop:30}}>
            <ImageBackground style={{height:'100%', width:'100%'}} 
                    resizeMode="stretch" source={require('./assets/keyboard.png')}>

                <View style={key_st} opacity={k1} 
                    onTouchStart={function(){play00(); setk1(1)}} 
                    onTouchEnd={function(){setk1(0)}}/> 

                <View style={key_st} opacity={k2} 
                    onTouchStart={function(){play02(); setk2(1)}} 
                    onTouchEnd={function(){setk2(0)}}/>
                    
                <View style={key_st} opacity={k3} 
                    onTouchStart={function(){play04(); setk3(1)}} 
                    onTouchEnd={function(){setk3(0)}}/>

                <View style={key_st} opacity={k4} 
                    onTouchStart={function(){play05(); setk4(1)}} 
                    onTouchEnd={function(){setk4(0)}}/>

                <View style={key_st} opacity={k5} 
                    onTouchStart={function(){play07(); setk5(1)}} 
                    onTouchEnd={function(){setk5(0)}}/>

                <View style={key_st} opacity={k6}
                    onTouchStart={function(){play09(); setk6(1)}} 
                    onTouchEnd={function(){setk6(0)}}/>

                <View style={key_st} opacity={k7} 
                    onTouchStart={function(){play11(); setk7(1)}} 
                    onTouchEnd={function(){setk7(0)}}/>

                <View style={key_st} opacity={k8} 
                    onTouchStart={function(){play12(); setk8(1)}} 
                    onTouchEnd={function(){setk8(0)}}/>
            </ImageBackground>
        </View>
    );
}