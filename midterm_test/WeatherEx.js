import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

var url="http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&cnt=5&appid=8964c0da8c4fd3380b7f8d464fbcd9a3";
var st_text={fontSize:20}
export default function App(){

    const [city, setCity]=useState('');
    const [country, setCountry]=useState('');
    const [temp, setTemp]=useState('');
    const [weather, setWeather]=useState('');
    const [wind, setWind]=useState('');
    const [icon, setIcon]=useState('');

    //최초 한번만 실행 
    //일단 json url 패치
    //데이터 받으면, 받은 데이터 response text를 json으로 바꾸기 json() 메솓,
    //json 파일을 콘솔에 띄우고, data 변수를 json 으로 바꾸기
    //이건 그냥 json으로 제대로 못바꿧을 경우를 대비한... 콘솔창에 에러 띙ㅇ귀
    useEffect(function(){
        fetch(url)
        .then(function(response){return response.json();})
        .then(function(json){
            console.log(json);
            setCity(json.name);
            setCountry(json.sys.country);
            setTemp(json.main.temp);
            setWeather(json.weather[0].description);
            setWind(json.wind.speed);
            setIcon("http://openweathermap.org/img/w/"+json.weather[0].icon+".png");
        })
        .catch(function(error){console.error(error);})
    },[]);

    return (
        <View style={{flex:1, marginTop:30, padding:20}}>
            <Text style={st_text}>City: {city}</Text>
            <Image style={{width:100, height:100}} source={{uri:icon}}/>
        </View>
    )
};