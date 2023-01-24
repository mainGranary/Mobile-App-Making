import React, { useState } from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //화면전환시키는것
import { createStackNavigator } from '@react-navigation/stack'; //쌓는것

var text_st={fontSize:20, margin:10};

var text_st2={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var input_st={fontSize:30, borderWidth:1, padding:10, margin:10};

function HelloScreen(){
    const [greet, setGreet] = useState("Hi");
    const [name, setName] = useState("Name");

    return (
        <View>
            <Text style={text_st}>{greet}, {name}</Text>
            <TextInput style={{fontSize:20, padding:10, margin:10, borderWidth:1}} onChangeText={function(t){setName(t)}}/>
            <View style={{margin:10, flexDirection:"row-reverse"}}>
                <Button title="Nice" onPress={function(){setGreet("Nice to meet you")}}/>
                <View style={{width:10}}/>
                <Button title="hello" onPress={function(){setGreet("Hello")}}/>
            </View>
        </View>
    )
}

function AboutScreen(){
    return <Text style={text_st}>This is about the app</Text>;
}

function MultipleScreen(){
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);

    return (
        <View style={{paddingTop:30}}>
            <View style={{flexDirection:"row"}}>
                <Text style={text_st2}>{A}</Text>
                <Text style={{padding:10, margin:10, fontSize:30}}>{"  X  "}</Text>
                <Text style={text_st2}>{B}</Text>
                <Text style={{paddng:10, margin:10, fontSize:30}}>{"  =  "}</Text>
                <Text style={text_st2}>{A*B}</Text>
            </View>

            <View>
                <Text style={text_st2}>{A} x {B} = {A*B}</Text>
            </View>

            <View style={{margin:10, flexDirection:"row"}}>
                <View>
                    <Button title="  +  " onPress={function(){setA(A+1)}}/>
                    <View style={{height:10}}/>
                    <Button title="  -  " onPress={function(){setA(A-1)}}/>
                </View>
                <View style={{width:10}}/>
                <View>
                    <Button title="  +  " onPress={function(){setB(B+1)}}/>
                    <View style={{height:10}}/>
                    <Button title="  -  " onPress={function(){setB(B-1)}}/>
                </View>                
            </View>
        </View>
    );
}

function HomeScreen({navigation}){
    return(
        <View>
            <Text style={text_st}>Home Screen</Text>
            <Button title="About" onPress={function(){navigation.navigate("About")}}/>
            <View style={{height:10}}/>
            <Button title="Hello" onPress={function(){navigation.navigate("Hello")}}/>
            <View style={{height:10}}/>
            <Button title="구구단" onPress={function(){navigation.navigate("구구단")}}/>
        </View>
    )
}

const Stack=createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="About" component={AboutScreen}/>
                <Stack.Screen name="Hello" component={HelloScreen}/>
                <Stack.Screen name="구구단" component={MultipleScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}