
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, Button, TextInput}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

var text_st={fontSize:20, margin:10}; /*for home text*/
var input_st={fontSize:20, borderWidth:1, padding:10, margin:10}; /*for input text*/
var multitext_st={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10}; /*for multiply text*/
var text_op={fontSize:30, padding:10, margin:10}; /*for multiply operator text*/

var a = 0;
var b = 0;

function HelloScreen(){
    const [greet, setGreet]=useState('Hi'); /*change hello & nice to meet you*/
    const [name, setName]=useState('Name'); /*change input name*/

    return (
        <View>
            <Text style={text_st}>{greet}, {name}</Text>
            <TextInput style={input_st} onChangeText={setName} /> 

            <View style={{margin:10, flexDirection:"row-reverse"}}> 
                <Button title="Nice" onPress={function() {setGreet('Nice to meet you')}} /> 
                <View style={{width:10}}></View>
                <Button title="Hello" onPress={function() {setGreet('Hello')}}/> 
            </View>
        </View>
    );
}

function AboutScreen(){
    return (
        <View>
            <Text style={text_st}>This is about the app</Text>
            <Image style={{width:200, height:200}} source={require('./cat-icon.png')}/>
        </View>
    )
}

function MultiScreen(){
    const [A, setA]=useState(0);
    const [B, setB]=useState(0);

    return (
        <View style={{paddingTop:30}}>
            <View style={{flexDirection:"row"}}>
                <Text style={multitext_st}>{A}</Text>
                <Text style={text_op}>{" x "} </Text>
                <Text style={multitext_st}>{B}</Text>
                <Text style={text_op}>{" = "} </Text>
                <Text style={multitext_st}>{A*B}</Text>
            </View>

            <View style={{flexDirection:"row"}}>
                <View style={{margin:10}}>
                <Button title=" + " onPress={function() {setA(A+1)}}/>
                <View style={{height:20}}></View>
                <Button title=" - " onPress={function() {setA(A-1)}}/>
                </View>

                <View style={{width:80}}></View>

                <View style={{margin:10}}>
                <Button title=" + " onPress={function() {setB(B+1)}}/>
                <View style={{height:20}}></View>
                <Button title=" - " onPress={function() {setB(B-1)}}/>
                </View>
            </View>
        </View>
    );
}

function HomeScreen({navigation}){
    return (
        <View>
            <Text style={text_st}>Home Screen</Text>
            <Button title="About" onPress={function() {navigation.navigate('About')}}/>
            <View style={{height:10}}/>
            <Button title="Hello" onPress={function() {navigation.navigate('Hello')}}/>
            <View style={{height:10}}/>
            <Button title="구구단" onPress={function() {navigation.navigate('구구단')}}/>
        </View>
    );
}

const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Hello" component={HelloScreen} />
                <Stack.Screen name="구구단" component={MultiScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}