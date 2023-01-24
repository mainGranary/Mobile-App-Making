import React, { useState } from 'react';
import {Text, View, Button, TextInput, FlatList} from 'react-native';

// phone book ex
// add and delete new item
// array to object

var text_st={fontSize:20, borderWidth:1, borderColor:'gray', flex:1, padding:5, margin:2 };
var input_st={fontSize:20, borderWidth:1, flex:1, padding:5, margin:5};

//var N=['Ewha', 'June']
//var P=[1234, 5678]

var pbook=[ {name:'Ewha', phone:1234}, {name:'June', phone:3347}, {name:'Jane', phone:1111}, {name:'Nick', phone:1212} ]; //사랆..이라는 오브젝트니까 이렇게 값 하나하나 주는게 맞는 듯

export default function App(){

    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');
    const [refresh, setRefresh]=useState(0);

    function add_item(){
        pbook.push( {name:name, phone:phone} );
        setRefresh(refresh+1);
    }

    function del_item(){
       pbook.pop();
        setRefresh(refresh-1);
    }

    /* var L=[]; 
    for(var i=0; i<pbook.length; i++){
        var a=<View style={{flexDirection:'row'}}>
                <Text style={text_st}>{pbook[i].name}</Text>
                <Text style={text_st}>{pbook[i].phone}</Text>
            </View>
        L.push(a)
    } */



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
            <FlatList data={pbook}
                renderItem={    
                    function({item}){
                        return <View style={{flexDirection:'row'}}>
                                 <Text style={text_st}>{item.name}</Text>
                                 <Text style={text_st}>{item.phone}</Text>
                               </View>
                        }
                    }
            />
        </View>
    )
}