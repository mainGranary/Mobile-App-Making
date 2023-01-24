//아 근데 뭔가 짜증나게 생겻다능. . a에 뷰를 처넣은게 짜증남 더 예쁘게 할 수는 없엇나.  근데 생각해보니 이게 최선인거같기두... 
//가로배열 저 긴 거 하나 단위로 넣는다고 생각하면..저게 맞을지두.
//뷰 따로하면 어케할건디 ??? 저게 맞을지두...

/* 주소록 데이터 추가 및 삭제 기능, 네모박스 구현 */

import React, { useState } from 'react';
import {Text, View, Button, TextInput} from 'react-native';

var input_st={fontSize:20, borderWidth:1, flex:1, padding:5, margin:5}; //주소록 인풋 스타일 지정
var output_st={fontSize:20, borderWidth:0.5, flex:1, padding:5, margin:3}; //주소록 아웃풋 스타일 지정

var N=['Ewha', 'June', 'Jane', 'Nick'];
var P=[1234, 3347, 1111, 1212];

export default function App(){ 
    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');
    const [refresh, setRefresh]=useState(0);

    function add_item(){
        N.push(name);
        P.push(phone);
        setRefresh(refresh+1);
    }

    function delete_item(){
        N.pop(name);
        P.pop(phone);
        setRefresh(refresh+1);
    }

    var L=[ ]; //태그형식 주소록 모아두는 배열

    for(var i=0; i<N.length; i++){
        var a=
        <View style={{flexDirection:"row"}}>
            <Text style={output_st}>{N[i]}</Text>
            <Text style={output_st}>{P[i]}</Text>
        </View>

        L.push(a);
    }

    return(
        <View style={{marginTop:30}}>

            <Text style={{fontSize:40}}>Phone Book</Text>

            <View style={{margin:10, flexDirection:"row"}}>

                <TextInput style={input_st} onChangeText={setName} />
                <TextInput style={input_st} onChangeText={setPhone} />

                <Button title="  Add  " onPress={add_item}/>
                <View style={{width:5}}></View>
                <Button title="  Del  " onPress={delete_item}/>

            </View>

            {L}

        </View>
    );
}