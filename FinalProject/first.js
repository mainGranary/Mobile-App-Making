import React, { useState } from 'react';
import {Text, View, Button, TextInput, FlatList, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 

// DrawerNavigator
// StackNavigator
    // Setting page : username 
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    }
});


export default function App(){
    const [username, setUsername]=useState("뇨뇽");

    return (
        <View style={styles.container}>
            <Text style={{paddingTop:30}}>"안녕하세요, {username}님!</Text>
        </View>
    )
}