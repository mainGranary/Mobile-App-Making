import React, { useState } from 'react';
import {Text, View, Button, TextInput, FlatList, StyleSheet} from 'react-native';


const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        margin:10,
        flexDirection:'row',
        backgroundColor:'lightblue'
    },
    text:{
        fontSize:30,
        marginHorizontal:10
    },
    age:{
        fontSize:20,
        color:'red'
    }
});

var datalist = [
    {key:'Devin', age:23},
    {key:'Dan', age:21}
]

export default function App(){
    const [A, setA] = useState('');
    const [B, setB]=useState('');

    return (
        <View style={styles.container}>
            {/*<View style={{margin:10, flexDirection:'row'}}>*/}
            <FlatList 
            data={datalist}
            renderItem={    
                function({item}){
                    return <View style={styles.item}>
                        <Text style={styles.text}>{item.key}</Text>
                        <Text style={styles.age}>{item.age}</Text>
                    </View>
                }
            }
            />
        </View>
    )
}