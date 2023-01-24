import React, {useState} from 'react';
import {View, Text, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

var text_st={fontSize:30, padding:10, margin:10};
var button_st={color:'dodgerblue'};

export default function App(){
    const [N, setN]=useState(0);

    return (
        <View style={{flex:1, marginTop:40, alignItems:'center'}}>
            <Text style={text_st}>Touched {N} times</Text>

            <TouchableHighlight underlayColor='orange' onPress={function(){setN(N+1);}}>
                <View>
                    <Text style={[text_st, button_st]}>High, Touch Me</Text>
                </View>
            </TouchableHighlight>

            {/* 배경색 변경 가능 */}

            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#2196F3')}
                                        onPress={function(){setN(N-1);}}>
                <View>
                    <Text style={[text_st, button_st]}>High, Touch Me</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}