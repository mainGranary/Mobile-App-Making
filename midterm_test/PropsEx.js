import React, { useState } from 'react';
import {Text, View, Button, TextInput,ImageBackground, StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

function Ask(Props){
    return (
        <View>
            <Text>Question #{Props.num}</Text>
            <View style={{flexDirection:"row", alignItems:'center', marginBottom:10}}>
                <Text>Enter your {Props.thing}</Text>
                <TextInput style={{flex:1, marginHorizontal:10, borderBottomWidth:1}}/>
                <Button titleStyle={{fontSize:40}} title=" OK "/>
            </View>
        </View>
    )
}

export default function App(){
    return (
        <View style={{margin:40, padding:10}}>
            <Ask num={1} thing="name"/>
            <Ask num={2} thing="age"/>
        </View>
    )
}