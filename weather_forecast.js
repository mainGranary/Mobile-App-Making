import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

//걍 for문 쓰지 말고 5번 복붙하렴 ^^ ............ 머리아프다~~

//var url="http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=8964c0da8c4fd3380b7f8d464fbcd9a3"
var url="http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&cnt=5&appid=8964c0da8c4fd3380b7f8d464fbcd9a3"; //forecast api
var st_text={fontSize:20};

var L=[];

export default function App(){
    //const [city,setCity] = useState('');
    //const [country, setCountry]=useState('');
    const [temp, setTemp]=useState('');
    const [weather, setWeather]=useState('');
    const [day, setDay]=useState(''); //sys.dt_txt
    //const [wind, setWind]=useState('');
    const [icon, setIcon]=useState('');
    const[data, setData]=useState([]);

    /* var tempInfo=[];
    var iconInfo=[];
    var weatherInfo=[];
    var dayInfo=[]; */

    useEffect(function() {
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(json) {
                setData(json);
              
                
            })
            
            .catch(function (error) {console.error(error);})
           
    }, []);

    if(data==[]){return;}
    else{
    
        for(var i=0; i<5; i++){
        var a=
        <View style={{flexDirection:"row"}}>   
            <Text style={st_text}>{data.list[i].main.temp}</Text>
            <Text style={st_text}>{weather}</Text>
        </View>

        L.push(a);
    }
            return (
        <View style={{flex:1, marginTop:30, padding:20}}>
            {L}
        </View>
    );
            }
};