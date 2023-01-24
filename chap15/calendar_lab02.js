import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarPicker from 'react-native-calendar-picker';

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40
    },
    box:{
        margin:20
    },
    datetext:{
        fontSize:20,
        marginVertical:10
    },
    row:{
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        fontSize:16
    },
    expense:{
        flex:1,
        borderBottomWidth:1,
        marginHorizontal:10,
        fontSize:16,
        color:'blue'
    },
    memo:{
        borderBottomWidth:1,
        fontSize:16,
        marginTop:10,
        color:'blue'
    }
})

export default function App(){
    
    const [date, setDate]=useState('');
    const [date1, setDate1]=useState('');
    const [expense, setExpense]=useState('');
    const [memo, setMemo]=useState('');

    async function onDateChange(d){
        console.log(d.format('YYYYMMDD'));
        setDate(d.format('YYYYMMDD'));
        setDate1(d.format('MMMM DD, YYYY'));

    }


    return (
        <View style={styles.container}>
            <CalendarPicker onDateChange={onDateChange}/>
            <View style={styles.box}>
                <Text style={styles.datetext}>{ date1 } </Text>
                <View style={styles.row}>
                    <Text style={styles.text}>Expense</Text>
                    <TextInput style={styles.expense} keyboardType="numeric" onChangeText={setExpense}/>
                    <Button title="Save"/>
                </View>
                <TextInput style={styles.memo} placeholder="Memo" onChangeText={setMemo}/>
            </View>
        </View>
    )
}