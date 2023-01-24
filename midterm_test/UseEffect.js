import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

var text_st={
    width:100,
    fontSize:30,
    backgroundColor:'lightgray',
    padding:10,
    margin:20
}

export default function App(){

    const [val, setVal]=useState(0);

    useEffect(function(){
        console.log("this is side effect", val)
    },[]);

    return (
        <View style={{marginTop:30, alignItems:'center'}}>
            <Text style={text_st}>{val}</Text>
            <Button title="Count up" onPress={function(){setVal(val+1)}}/>
            <View style={{height:10}}/>
            <Button title="count down" onPress={function(){setVal(val-1)}}/>
        </View>
    )
}