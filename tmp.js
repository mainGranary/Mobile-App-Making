import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

//걍 for문 쓰지 말고 5번 복붙하렴 ^^ ............ 머리아프다~~

//var url="http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=8964c0da8c4fd3380b7f8d464fbcd9a3"
var url="http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&cnt=5&appid=8964c0da8c4fd3380b7f8d464fbcd9a3"; //forecast api
var st_text={fontSize:20};

export default function App(){
    //const [city,setCity] = useState('');
    //const [country, setCountry]=useState('');
    const [temp, setTemp]=useState('');
    const [weather, setWeather]=useState('');
    const [day, setDay]=useState(''); //sys.dt_txt
    //const [wind, setWind]=useState('');
    const [icon, setIcon]=useState('');

    const [L, setL]=useState([]);


    /* var tempInfo=[];
    var iconInfo=[];
    var weatherInfo=[];
    var dayInfo=[]; */

    var a;

    useEffect(function() {
        fetch(url)
            .then(function(response){return response.json();})
            .then(function(json) {
                var A=[];

                // fetch 안에다가 json 통째로 집어넣고
                // 끝내고
                // 밖에서 루프 돌려서 집어넣기 
                // 배열도 요 안에서 호호롥 ...
                for(var i=0; i<5; i++){
                    setTemp(json.list[i].main.temp);
                    setIcon("http://openweathermap.org/img/w/"+json.list[i].weather[0].icon+".png");
                    setWeather(json.list[i].weather[0].description);
                    setDay(json.list[i].sys.dt_txt);

                    a=
                    <View style={{flexDirection:"row"}}>
                       
                        <Text style={st_text}>{json.list[i].main.temp}</Text>
                        <Text style={st_text}>{weather}</Text>
                    </View>

                    A.push(a);
                }
                setL(A);
                
            })
            
            .catch(function (error) {console.error(error);})
           
    }, []);

    
    console.log(L);
    return (
        <View style={{flex:1, marginTop:30, padding:20}}>
            {L}
        </View>
    );
};