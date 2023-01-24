import { useEffect } from 'react';
import {Text, View} from 'react-native';

var text_st={fontSize:60, padding:10};

export default function App(){
    const[hh, sethh]=useState("");
    const[mm, setmm]=useState("");
    const[ss, setss]=useState("");

    useEffect(function (){
        setInterval(run_everysec, 1000); //1초마다 한번씩 run_everysec function 호출
    }, []);

    function run_everysec(){
        var d=new Date();
        sethh(d.getHours());
        setmm(d.getMinutes());
        setss(d.getSeconds());
    }

    return (
        <View style={{paddingTop:30}}>
            <Text style={text_st}>{hh}:{mm}:{ss}</Text>
        </View>
    );
}