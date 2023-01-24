import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

var url="http:api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&cnt=5&appid=8964c0da8c4fd3380b7f8d464fbcd9a3";

export default function App(){
    const [data,setData] = useState([]);

    useEffect(function() {
        fetch(url)
            .then(function(response){return responce.json();})
            .then(function(json){console.log(json); setData(json);})
            .catch(function (error) {console.error(error);})
    }, []);

    return (
        <View style={{flex:1, marginTop:30, padding:20}}>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
};