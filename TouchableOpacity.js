/* TouchableOpacity makes anything to button */

import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles=StyleSheet.create({ //주사위 스타일
    circle:{
        width:40, 
        height:40,
        borderRadius:20,
        backgroundColor:'rgb(0,200,255)',
        borderWidth:1,
        margin:2,
    },
    dice:{
        backgroundColor:'rgb(255,240,200)',
        padding:10,
    },
    text:{
        textAlign:'center',
        fontSize:20,
        margin:5,
    }
});

function Circle(){ //주사위 눈 component
    return <View style={styles.circle}/>;
}

function Blank(){ //주사위 공백 눈 component
    return <View style={[styles.circle, {backgroundColor: undefined, borderWidth:0}] }/>;
}

function Dice5(){ //주사위 component
    return(
        <View style={styles.dice}>
            <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
            <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
            <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
        </View>
    );
}

export default function App(){
    const [N, setN]=useState(0);

    return(
        <View style={{flex:1, marginTop:40, alignItems:'center'}}>

            <Text style={styles.text}>Touched {N} times</Text>

            <TouchableOpacity onPress={function(){setN(N+1)}}>
                <Dice5/>
            </TouchableOpacity>
        </View>
    );
}
