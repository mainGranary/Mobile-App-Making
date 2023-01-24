import React, { useState } from 'react';
import {Text, View, Button } from 'react-native';

var head_st={fontSize:40, color:'blue', backgroundColor:'orange', padding:10, margin:10};

export default function App(){

    const [hello, sethello] = useState('Hello');

    function action(){
        sethello('hi');
    }

    return (
        <View style={{paddingTop:30}}>
            <Text style={head_st}>{hello}</Text>

            <Button title="Press" onPress={
                function(){
                    sethello('hello,ewha');
                }
            }/>

            <View style={{height:10}}></View>

            <Button title="Touch" onPress={ action } />

        
        </View>
    )
}