import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

var url="http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&cnt=5&appid=8964c0da8c4fd3380b7f8d464fbcd9a3"; //forecast api
var st_text={fontSize:20};

var L=[];

export default function App(){

    const [icon1, setIcon1]=useState('');
    const [temp1, setTemp1]=useState('');
    const [weather1, setWeather1]=useState('');
    const [day1, setDay1]=useState(''); 

    const [icon2, setIcon2]=useState('');
    const [temp2, setTemp2]=useState('');
    const [weather2, setWeather2]=useState('');
    const [day2, setDay2]=useState(''); 

    const [icon3, setIcon3]=useState('');
    const [temp3, setTemp3]=useState('');
    const [weather3, setWeather3]=useState('');
    const [day3, setDay3]=useState(''); 

    const [icon4, setIcon4]=useState('');
    const [temp4, setTemp4]=useState('');
    const [weather4, setWeather4]=useState('');
    const [day4, setDay4]=useState(''); 

    const [icon5, setIcon5]=useState('');
    const [temp5, setTemp5]=useState('');
    const [weather5, setWeather5]=useState('');
    const [day5, setDay5]=useState(''); 


    /* var tempInfo=[];
    var iconInfo=[];
    var weatherInfo=[];
    var dayInfo=[]; */

    // setCity(json.name);
                // setCountry(json.sys.country);
                // setWind(json.wind.speed);

    useEffect(function() {
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(json) { 
                setIcon1("http://openweathermap.org/img/w/"+json.list[0].weather[0].icon+".png");
                setTemp1(json.list[0].main.temp);
                setWeather1(json.list[0].weather[0].description);
                setDay1(json.list[0].dt_txt);

                setIcon2("http://openweathermap.org/img/w/"+json.list[1].weather[0].icon+".png");
                setTemp2(json.list[1].main.temp);
                setWeather2(json.list[1].weather[0].description);
                setDay2(json.list[1].dt_txt);

                setIcon3("http://openweathermap.org/img/w/"+json.list[2].weather[0].icon+".png");
                setTemp3(json.list[2].main.temp);
                setWeather3(json.list[2].weather[0].description);
                setDay3(json.list[2].dt_txt);

                setIcon4("http://openweathermap.org/img/w/"+json.list[3].weather[0].icon+".png");
                setTemp4(json.list[3].main.temp);
                setWeather4(json.list[3].weather[0].description);
                setDay4(json.list[3].dt_txt);

                setIcon5("http://openweathermap.org/img/w/"+json.list[4].weather[0].icon+".png");
                setTemp5(json.list[4].main.temp);
                setWeather5(json.list[4].weather[0].description); 
                setDay5(json.list[4].dt_txt); 
            })
            .catch(function (error) {console.error(error);})
    }, []);

    return (
        <View style={{flex:1, marginTop:30, padding:20}}>
            <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <Text style={ [st_text, {margin:10}] }>{day1.toString().substring(5,16)}</Text>
                <Text style={ [st_text, {margin:10}] }>{temp1}</Text>
                <Text style={ [st_text, {margin:10}] }>{weather1}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <Text style={ [st_text, {margin:10}] }>{day2}</Text>
                <Text style={ [st_text, {margin:10}] }>{temp2}</Text>
                <Text style={ [st_text, {margin:10}] }>{weather2}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <Text style={ [st_text, {margin:10}] }>{day3}</Text>
                <Text style={ [st_text, {margin:10}] }>{temp3}</Text>
                <Text style={ [st_text, {margin:10}] }>{weather3}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <Text style={ [st_text, {margin:10}] }>{day4}</Text>
                <Text style={ [st_text, {margin:10}] }>{temp4}</Text>
                <Text style={ [st_text, {margin:10}] }>{weather4}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <Text style={ [st_text, {margin:10}] }>{day5}</Text>
                <Text style={ [st_text, {margin:10}] }>{temp5}</Text>
                <Text style={ [st_text, {margin:10}] }>{weather5}</Text>
            </View>
            
        </View>
    )
   // console.log(data)

    // if(data!=[]){
    //     var obj=JSON.parse(data);
    // }

    // return (
    //     <View style={{flex:1, marginTop:30, padding:20}}>
    //         <View style={{flexDirection:'row'}}>
    //             <Image style={{width:100, height:100}} source={{uri:"http://openweathermap.org/img/w/"+obj.weather[0].icon+".png"}}/>
    //             <Text style={st_text}></Text>
    //         </View>
    //     </View>


    // )

    // if(data==[]){return;}
    // else{
    
    //     for(var i=0; i<5; i++){
    //     var a=
    //     <View style={{flexDirection:"row"}}>   
    //         <Text style={st_text}>{data.list[i].main.temp}</Text>
    //         <Text style={st_text}>{weather}</Text>
    //     </View>

    //     L.push(a);
    // }
    //         return (
    //     <View style={{flex:1, marginTop:30, padding:20}}>
    //         {L}
    //     </View>
    // );
    //         }
};