import React, { useState } from 'react';
import {Text, View, Button, TextInput, FlatList} from 'react-native';


const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    }
});

export default function App(){
    return (
        <View style={styles.container}>
            <FlatList data={[
                {key:'Devin'},
                {key:'Dan'},
                {key:'Dominic'}
            ]}
            renderItem={    
                function({item}){
                    return <Text style={styles.item}>{item.key}</Text>;
                }
            }
            />
        </View>
    )
}