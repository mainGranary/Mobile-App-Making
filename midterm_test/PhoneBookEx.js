import React, { useState } from 'react';
import {Text, View, Button, TextInput,ImageBackground} from 'react-native';
import {Audio} from 'expo-av';

// phone book ex
// add and delete new item

var text_st={fontSize:20, borderWidth:1, borderColor:'gray', flex:1, padding:5, margin:2 };
var input_st={fontSize:20, borderWidth:1, flex:1, padding:5, margin:5};

var N=['Ewha', 'June']
var P=[1234, 5678]

export default function App(){

    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');
    const [refresh, setRefresh]=useState(0);

    function add_item(){
        N.push(name);
        P.push(phone);
        setRefresh(refresh+1);
    }

    function del_item(){
        N.pop();
        P.pop();
        setRefresh(refresh-1);
    }

    var L=[]; //UI 만들기 위한 빈 배열

    //일단 UI 형식으로 차곡차곡 가져온 뒤
    //L에 넣는다

    for(var i=0; i<N.length; i++){

        var a=<View style={{flexDirection:'row'}}>
            <Text style={text_st}>{N[i]}</Text>
            <Text style={text_st}>{P[i]}</Text>
        </View>

        L.push(a)
    }

    return (
        <View style={{marginTop:30}}>
            <Text style={{fontSize:40}}>Phone Book</Text>
            <View style={{margin:10, flexDirection:'row'}}>
                <TextInput style={input_st} onChangeText={setName}/>
                <TextInput style={input_st} onChangeText={setPhone}/>
                <Button title="  add  " onPress={add_item}/>
                <View style={{width:10}}/>
                <Button title="  del  " onPress={del_item}/>
            </View>


            {L}
        </View>
    )
}