import React, { useState } from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

export default function App(){
    return (
        <ScrollView contentContainerStyle={{borderColor:'red', borderWidth:10, paddingTop:30}} 
                    style={{borderColor:'blue', borderWidth:10}}>
            <Text style={{fontSize:40, color:'blue'}}>Hello Ewha</Text>
            <Text>Nice to meet you</Text>
            <Text style={{fontSize:20}}>Nice to meet you</Text>
            <Text style={{fontSize:30}}>Nice to meet you</Text>
            <Image style={{width:200, height:200}} source={require('./cat-icon.png')}/>
            <Image style={{width:200, height:200}} source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png'}}/>
            <Text style={{fontSize:20}}>Nice to meet you</Text>
            <Text style={{fontSize:30}}>Nice to meet you</Text>
            <Image style={{width:200, height:200}} source={require('./cat-icon.png')}/>
            <Text style={{fontSize:20}}>Nice to meet you</Text>
            <Text style={{fontSize:30}}>Nice to meet you</Text>
            <Image style={{width:200, height:200}} source={require('./cat-icon.png')}/>
        </ScrollView>
    )
}