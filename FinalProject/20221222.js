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
        backgroundColor:"lightgray",
        paddingBottom:5,
        alignItems:"center",
        justifyContent:"center",

        // position:"absolute",
        // top:chartHeight*0.7,
        // bottom:chartHeight*0.8,
        // left:chartWidth*0.7,
        // right:chartWidth*0.8
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

function AddScreen({navigation}){

    const [category, setCategory]=useState("");
    const [title, setTitle]=useState("");
    const [year, setYear]=useState('');
    const [month, setMonth]=useState('');
    const [day, setDay]=useState('');
    const [image, setImage]=useState(null);
    const [refresh, setRefresh]=useState(0);

    const [duedate, setDuedate]=useState(0);
    
    const[re, setRe]=useState(0);

    function onDateChange(d){
        setYear(d.format('YYYY'));
        setMonth(d.format('MM'));
        setDay(d.format('DD'));
        addDday();
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
        gifticonList.push( {category:category, title:title, date:{year:year, month:month, day:day}, image:image, result:duedate} );
        alert("저장을 완료했어요!\n리스트를 확인해주세요.");
        console.log(gifticonList)
        save_data();
        load_data();
        setRefresh(refresh+1);
    }

    useEffect(function(){
        load_data();
    }, [gifticonList]);

    function gifticonSort(){
        gifticonList.sort(function(comp1, comp2){
            var comp1Day=comp1.result;
            var comp2Day=comp2.result;

            if(comp1==null || comp2==null) return;
            if(comp1Day>comp2Day) return 1; //array의 sort 함수는 리턴되는 값을 기준으로 array를 정렬하므로 오름차순으로 구현하고 싶으면 이렇게 부등호를 바꿔준다 
            else if(comp1Day<comp2Day) return -1;

            setRe(re-1);
        })
        //console.log(gifticonList);
    }

    var daycount;
    var today=new Date();

    function addDday(){
        var dday=new Date(Number(year), Number(month)-1, Number(day));
        var gap=dday.getTime()-today.getTime();
        daycount=Math.ceil(gap/(1000*60*60*24));
        setDuedate(daycount);
        //gifticonList[i].result=daycount;
        //console.log(gifticonList);

        gifticonSort();

        setRe(re-1);
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
            <Text style={{paddingTop:60,fontSize:25,paddingLeft:20, fontWeight:'bold'}}>어떤 기프티콘을 받으셨나요?</Text>
            <View style={{margin:20}}/>

            {/*카테고리 입력*/}
            <Text style={{paddingLeft:20, fontSize:20, fontWeight:'bold'}}>카테고리</Text>
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
            <Text style={{paddingLeft:20, fontSize:20, fontWeight:'bold'}}>기프티콘 이름</Text>
            <View style={{margin:3}}/>
            <View>
                <TextInput style={{fontSize:15, borderWidth:1, borderColor:'lightgray', width:"80%", borderWidth:2,  padding:10, marginLeft:20}} onChangeText={setTitle} value={title}/>
            </View>

            <View style={{margin:10}}/>

            {/*유효기간 입력*/}
            <View style={{flexDirection:'row'}}>
                <Text style={{paddingLeft:20, fontSize:20 , fontWeight:'bold'}}>유효기간   </Text>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'brown'}}>{year}. {month}. {day}</Text>
                </View>
            </View>
            <View style={{margin:3}}/>
            <View>
                <CalendarPicker onDateChange={onDateChange}/>
            </View>


            <View style={{margin:10}}/>

            {/*기프티콘 사진*/}
            <Text style={{paddingLeft:20, fontSize:20, fontWeight:'bold'}}>기프티콘 사진 업로드</Text>
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
                <View style={[styles.category, {marginLeft:20, width:110, flexDirection:'row', backgroundColor:'white'}]}>
                    <Text style={{fontSize:15,color:'gray'}}>저장</Text>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{flexDirection:'row-reverse'}} onPress={function(){navigation.navigate("Home")}}>
                    <View style={[styles.category, {marginLeft:20, width:110, flexDirection:'row', backgroundColor:'white', marginBottom:20, alignItems:'center', justifyContent:'center', marginRight:20}]}>
                        <Text style={{fontSize:15,color:'gray'}}>돌아가기</Text>
                    </View>
    </TouchableOpacity> */}

            <TouchableOpacity style={{flexDirection:'row-reverse', marginLeft:20}} onPress={function(){navigation.navigate("Home")}}>
                <View style={[styles.button, {marginBottom:20}]}>
                    <Text style={{fontSize:40,color:'white'}}>←</Text>
                </View>
            </TouchableOpacity>

        </ScrollView>
    );

}

function HomeScreen({navigation}){

    const [username, setUsername]=useState('서연');
    //const [random, setRandom]=useState('아메리카노');

    // if(gifticonList!=null)
    //     var random=gifticonList[Math.random()*gifticonList.length].title;

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
    var print=[];

    for(var i=0; i<gifticonList.length; i++){

        if(gifticonList[i].result<=7 && gifticonList[i].result>=0){
            print[i]=<Text style={{color:'red'}}>D-{gifticonList[i].result}</Text>
        }
        else{
            print[i]=<Text>D-{gifticonList[i].result}</Text>
        }

        var a=<View style={{margin:20}}>
            <View style={{borderColor:'gray', borderWidth:2, borderRadius:10, flexDirection:'row', margin:10, padding:10, paddingHorizontal:50, alignItems:'center', justifyContent:'space-between'}}>
                <Image source={{uri:gifticonList[i].image}} style={{width:80, height:100}}/>
                <View style={{flexDirection:'column', margin:3}}>
                    <Text style={{marginLeft:5, margin:2, fontSize:15, fontWeight:'normal'}}>{gifticonList[i].category}</Text>
                    <Text style={{marginLeft:5, margin:2, fontSize:17, fontWeight:'bold'}}>{gifticonList[i].title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginLeft:5, margin:2, fontSize:18, fontWeight:'normal'}}>{gifticonList[i].date.year}. </Text>
                        <Text style={{marginLeft:5, margin:2, fontSize:18, fontStyle:'normal'}}>{gifticonList[i].date.month}. </Text>
                        <Text style={{marginLeft:5, margin:2, fontSize:18, fontStyle:'normal'}}>{gifticonList[i].date.day}</Text>
                    </View>
                </View>
                <Text style={{marginLeft:20, margin:2, fontSize:25, fontWeight:'bold'}}>{print[i]}</Text>
            </View>
        </View>
        L.push(a);
    }


    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{backgroundColor:'lightgray'}}>
                <Text style={{paddingTop:30, margin:30, fontSize:25, fontWeight:'bold'}}>안녕하세요, {username}님!{"\n"}현재 보유하신 기프티콘들이에요.</Text>
            </View>


    
            <ScrollView contentContainerStyle={{backgroundColor:'white'}}>
                <Text style={{paddingTop:30}}>{L}</Text> 
            </ScrollView>

            <TouchableOpacity style={{flexDirection:'row-reverse', marginLeft:20}} onPress={function(){navigation.navigate("Add")}}>
                <View style={[styles.button]}>
                    <Text style={{fontSize:40,color:'white'}}>+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={delete_data}>
                    <View style={[styles.category, {marginLeft:20, width:110, flexDirection:'row', backgroundColor:'white', marginBottom:20, alignItems:'center', justifyContent:'center'}]}>
                        <Text style={{fontSize:15,color:'gray'}}>삭제</Text>
                    </View>
            </TouchableOpacity>

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