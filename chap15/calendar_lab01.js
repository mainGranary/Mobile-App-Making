import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40
    },
    box:{
        margin:20
    },
    text:{
        fontSize:20,
        marginVertical:10
    }
})

export default function App(){
    
    const [date, setDate]=useState('');
    const [date1, setDate1]=useState('');

    function onDateChange(d){
        console.log(d);
        console.log(d.toString());
        console.log(d.format('YYYYMMDD'));
        console.log(d.format('MMMM DD, YYYY'));

        setDate(d.format('YYYYMMDD'));
        setDate1(d.format('MMMM DD, YYYY'));
    }

    return (
        <View style={styles.container}>
            <CalendarPicker onDateChange={onDateChange}/>
            <View style={styles.box}>
                <Text>Date: {date}</Text>
                <Text style={styles.text}>{ date1 }</Text>
            </View>
        </View>
    )
}