import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles=StyleSheet.create({
    box:{
        borderColor:'blue',
        borderWidth:2,
        margin:5,
        padding:5,
    },
    text:{
        backgroundColor:'wheat',
        fontSize:30,
        margin:2,
        padding:2,
    },
});

function BoxGroup(props){
    return (
        <View style={styles.box}>
            {props.children}
        </View>
    );
}

export default function App(){
    return (
        <View style={{flex:1, marginTop:40, alignItems:'center'}}>

            {/*nested*/}
            
            <BoxGroup> 

                <BoxGroup>
                    <Text style={styles.text}>ABCD</Text>
                    <Text style={styles.text}>123</Text>
                    <Button title="OK"/>
                </BoxGroup>

                <BoxGroup>
                    <Text style={styles.text}>123</Text>
                    <Button title="OK"/>
                </BoxGroup>

            </BoxGroup>

        </View>
    );
}