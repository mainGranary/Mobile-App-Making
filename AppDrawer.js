/*Add all labs*/
/*use drawer*/

import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, Button, TextInput}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

var text_st={fontSize:20, margin:10}; /*for home*/
var input_st={fontSize:20, borderWidth:1, padding:10, margin:10}; /*for input text*/

var gugutext_st={fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var text_op={fontSize:30, padding:10, margin:10};
var a = 0;
var b = 0;


function HelloScreen(){

    const [greet, setGreet]=useState('Hi'); /*change hello-nicetomeetyou*/
    const [name, setName]=useState('Name'); /*change your name*/

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
            <Text style={text_st}> This is about the app </Text>
            <Image style={{width:200, height:200}} source={require('./cat-icon.png')}/>
        </View>
    )
}

function GuguScreen(){
    
    const [A, setA]=useState(0);
    const [B, setB]=useState(0);

    return (
        <View style={{paddingTop:30}}>
            <View style={{flexDirection:"row"}}>
            <Text style={gugutext_st}>{A}</Text>
            <Text style={text_op}>{" x "} </Text>
            <Text style={gugutext_st}>{B}</Text>
            <Text style={text_op}>{" = "} </Text>
            <Text style={gugutext_st}>{A*B}</Text>
            </View>
    
            <View style={{padding:10, margin:10, flexDirection:"row"}}> {/*방향을바꿔볼까 ㅎ..*/}
            <Button title="  +  " onPress={function() {setA(A+1)}}/>
            <View style={{width:80}}></View>
            <Button title="  +  " onPress={function() {setB(B+1)}}/>
            </View>
    
            <View style={{padding:10, margin:10, flexDirection:"row"}}>
            <Button title="  -  " onPress={function() {setA(A-1)}}/>
            <View style={{width:80}}></View>
            <Button title="  -  " onPress={function() {setB(B-1)}}/>
            </View>
        </View>
    );
}

function HomeScreen({navigation}){
    return (
        <View>
            <Text style={text_st}>Home Screen</Text>
            <Button title="About" onPress={function(){navigation.navigate('About')}}/>
            <View style={{height:10}}/>
            <Button title="Hello" onPress={function() {navigation.navigate('Hello')}}/>
            <View style={{height:10}}/>
            <Button title="구구단" onPress={function() {navigation.navigate('구구단')}}/>
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Hello" component={HelloScreen} />
                <Drawer.Screen name="구구단" component={GuguScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

