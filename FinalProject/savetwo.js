import React, { useState, useEffect } from 'react';
import {Text, View, ScrollView, TextInput, FlatList, StyleSheet, Button, TouchableOpacity, Image, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { Dimensions } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

var gifticonList=[];

async function get_perm(){
    if(Platform.OS!=='web'){
        const { status }=await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(status);
        if(status!=='granted')
            alert("갤러리 접근 권한 설정이 필요합니다.");
    }
}
 
const styles=StyleSheet.create({
    button:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:"lightpink",
        paddingBottom:5,
        alignItems:"center",
        justifyContent:"center",

        position:"absolute",
        top:chartHeight*0.85,
        bottom:chartHeight*0.85,
        left:chartWidth*0.8,
        right:chartWidth*0.9
    },

    category:{
        width:80,
        height:40,
        borderRadius:10,
        backgroundColor:'while',
        borderColor:'lightgray',
        borderWidth:2,

        alignItems:"center",
        justifyContent:"center",
        marginLeft:10
    }

});

/* function HomeScreen({navigation}){

    const [username, setUsername]=useState('쵸켕');
    const [random, setRandom]=useState('아메리카노');

    return(
    <View style={{backgroundColor:"lightblue"}}>

        <TouchableOpacity onPress={function(){navigation.navigate("Add")}}>
            <View style={styles.button}>
                <Text style={{fontSize:40,color:'white'}}>+</Text>
            </View>
        </TouchableOpacity>

        <ScrollView>
            <Text style={{paddingTop:30, margin:30, fontSize:25}}>안녕하세요, {username}님!{"\n"}오늘은 기프티콘으로 {random} 어때요?</Text>
        </ScrollView>
    </View>
    );
} */

function AddScreen({navigation}){

    const [category, setCategory]=useState("");
    const [title, setTitle]=useState("");
    const [year, setYear]=useState('');
    const [month, setMonth]=useState('');
    const [day, setDay]=useState('');
    const [image, setImage]=useState(null);
    const [refresh, setRefresh]=useState(0);

    function onDateChange(d){
        setYear(d.format('YYYY'));
        setMonth(d.format('MM'));
        setDay(d.format('DD'));
    }

    async function pickImage(){
        //await get_perm();
        let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[9,18],
            quality:1
        });
        if(!result.cancelled){
            setImage(result.uri);
        }
    };

    function add_item(){
        gifticonList.push( {category:category, title:title, date:{year:year, month:month, day:day}, image:image} );
        alert("저장을 완료했어요!\n리스트를 확인해주세요.");
        console.log(gifticonList)
        save_data();
        load_data();
        setRefresh(refresh+1);
    }

    async function save_data(){
        await AsyncStorage.setItem("gtflist", JSON.stringify(gifticonList));
    }

    async function load_data(){
        var value=await AsyncStorage.getItem("gtflist");
        console.log(value);
        gifticonList=JSON.parse(value);
        setRefresh(refresh+1);
    }

    return(
        <ScrollView>
            <Text style={{paddingTop:60,fontSize:25,paddingLeft:20}}>어떤 기프티콘을 받으셨나요?</Text>
            <View style={{margin:20}}/>

            {/*카테고리 입력*/}
            <Text style={{paddingLeft:20, fontSize:20}}>카테고리</Text>
            <View style={{margin:3}}/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={function(){setCategory("베이커리/카페")}} value={category}>
                    <View style={[styles.category, {marginLeft:20, width:110}]}>
                        <Text style={{fontSize:15,color:'gray'}}>베이커리/카페</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={function(){setCategory("패스트푸드")}} value={category}>
                    <View style={[styles.category, {width:90}]}>
                        <Text style={{fontSize:15,color:'gray'}}>패스트푸드</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={function(){setCategory("편의점")}} value={category}>
                    <View style={styles.category}>
                        <Text style={{fontSize:15,color:'gray'}}>편의점</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={function(){setCategory("잡화")}} value={category}>
                    <View style={styles.category}>
                        <Text style={{fontSize:15,color:'gray'}}>잡화</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={function(){setCategory("기타")}} value={category}>
                    <View style={styles.category}>
                        <Text style={{fontSize:15,color:'gray'}}>기타</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView> 

            <View style={{margin:10}}/>

            {/*기프티콘 이름 입력*/}
            <Text style={{paddingLeft:20, fontSize:20}}>기프티콘 이름</Text>
            <View style={{margin:3}}/>
            <View>
                <TextInput style={{fontSize:15, borderWidth:1, borderColor:'lightgray', width:"80%", borderWidth:2,  padding:10, marginLeft:20}} onChangeText={setTitle} value={title}/>
            </View>

            <View style={{margin:10}}/>

            {/*유효기간 입력*/}
            <Text style={{paddingLeft:20, fontSize:20}}>유효기간</Text>
            <View style={{margin:3}}/>
            <View>
                <CalendarPicker onDateChange={onDateChange}/>
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20}}>{year} {month} {day}</Text>
            </View>

            <View style={{margin:10}}/>

            {/*기프티콘 사진*/}
            <Text style={{paddingLeft:20, fontSize:20}}>기프티콘 사진 업로드</Text>
            <View style={{margin:3}}/>
            <TouchableOpacity onPress={pickImage} value={image}>
                <View style={[styles.category, {marginLeft:20, width:110, flexDirection:'row'}]}>
                    <Text style={{fontSize:15,color:'gray'}}>사진 찾기</Text>
                </View>
            </TouchableOpacity>
            <Image source={{uri:image}} style={{width:200, height:400, marginLeft:20, marginTop:10}}/>

            <View style={{margin:10}}/>

            {/*저장*/}
            <TouchableOpacity onPress={add_item}>
                <View style={[styles.category, {marginLeft:20, width:110, flexDirection:'row'}]}>
                    <Text style={{fontSize:15,color:'gray'}}>저장</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={load_data}>
                <View style={[styles.category, {marginLeft:20, width:110, flexDirection:'row'}]}>
                    <Text style={{fontSize:15,color:'gray'}}>불러오기</Text>
                </View>
            </TouchableOpacity>

            <Button title="돌아가기" onPress={function(){navigation.navigate("Home")}}/>

        </ScrollView>
    );

}

function HomeScreen({navigation}){
    const [username, setUsername]=useState('쵸켕');
    const [random, setRandom]=useState('아메리카노');

    //var count;

    //var array=route.params.gifticonList;

    // const [category, setCategory]=useState(array.category);
    // const [title, setTitle]=useState(array.title);
    // const [year, setYear]=useState(array.year);
    // const [month, setMonth]=useState(array.month);
    // const [day, setDay]=useState(array.day);
    // const [image, setImage]=useState(array.image);
    // const [refresh, setRefresh]=useState(0);

    const [re,setRe]=useState(0)

    async function load_data(){
        var value=await AsyncStorage.getItem("gtflist");
        //console.log(value);
        gifticonList=JSON.parse(value);
        //console.log(gifticonList);
        setRe(re+1);        
    }
    
    function delete_data(){
        gifticonList.pop();
        alert("성공적으로 삭제했어요.");
        save_data();
        console.log(gifticonList);
        setRe(re-1);
    }

    async function save_data(){
        await AsyncStorage.setItem("gtflist", JSON.stringify(gifticonList));
    }

    useEffect(function(){
        load_data();
    }, [gifticonList]);

    var L=[];
    var daycount;
    var today=new Date();

    var print=[];

    for(var i=0; i<gifticonList.length; i++){
        var dday=new Date(Number(gifticonList[i].date.year), Number(gifticonList[i].date.month)-1, Number(gifticonList[i].date.day));
        var gap=dday.getTime()-today.getTime();
        daycount=Math.ceil(gap/(1000*60*60*24));
        gifticonList[i].result=daycount;
        //console.log(gifticonList);

        if(gifticonList[i].result<=7){
            print[i]=<Text style={{color:'red'}}>D-{gifticonList[i].result}</Text>
        }
        else{
            print[i]=<Text>D-{gifticonList[i].result}</Text>
        }

        var a=<View style={{flexDirection:'row', margin:10}}>
            <Image source={{uri:gifticonList[i].image}} style={{width:50, height:50, marginLeft:20, marginTop:10}}/>
            <Text>{gifticonList[i].category}</Text>
            <Text>{gifticonList[i].title}</Text>
            <Text>{gifticonList[i].date.year}</Text>
            <Text>{gifticonList[i].date.month}</Text>
            <Text>{gifticonList[i].date.day}</Text>
            <Text>{print[i]}</Text>
        </View>
        L.push(a);
    }


    return(
        <View style={{backgroundColor:"lightblue"}}>
    
            <TouchableOpacity onPress={function(){navigation.navigate("Add")}}>
                <View style={styles.button}>
                    <Text style={{fontSize:40,color:'white'}}>+</Text>
                </View>
            </TouchableOpacity>
    
            <ScrollView>
                <Text style={{paddingTop:30, margin:30, fontSize:25}}>안녕하세요, {username}님!{"\n"}오늘은 기프티콘으로 {random} 어때요?</Text>
                <Text style={{paddingTop:30}}>{L}</Text>
                <Button title="삭제" onPress={delete_data}/>
            </ScrollView>
        </View>
        );

}

const Stack=createStackNavigator();

export default function App(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen}/>
                <Stack.Screen options={{headerShown:false}} name="Add" component={AddScreen}/>
                {/*<Stack.Screen options={{headerShown:false}} name="List" component={ListScreen}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    )
}