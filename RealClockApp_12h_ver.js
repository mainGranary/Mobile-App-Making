/* CLOCK - am/pm, two-digits, font.BOLD included */

import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

var text_st={fontSize:60, padding:10, backgroundColor:'blanchedalmond'};

export default function App(){
    const[hh, sethh]=useState("");
    const[mm, setmm]=useState("");
    const[ss, setss]=useState("");
    const[ap, setap]=useState("");

    useEffect(function (){
        setInterval(run_everysec, 1000); //1초마다 한번씩 run_everysec function 호출
    }, []);

    function run_everysec(){
        var d=new Date();

        if(d.getHours()<12){ //시간이 12 미만이라면 오전 
            setap("am");

            if(d.getHours()<10) //그중에서도 한자리수라면 
                sethh("0"+d.getHours()); 
            else 
                sethh(d.getHours());
        } 
        else { //시간이 12 이상이라면 오후 
            var hour=d.getHours()-12; //24시간에서 12시간 단위로 바꿀 거임

            if(hour<10)
                sethh("0"+hour);
            else  
                sethh(hour);

            setap("pm");
        }

        if(d.getMinutes()<10) setmm("0"+d.getMinutes()); //분이 한자리수라면
        else setmm(d.getMinutes());

        if(d.getSeconds()<10) setss("0"+d.getSeconds()); //초가 한자리수라면
        else setss(d.getSeconds());
    }

    return (
        <View style={{paddingTop:30}}> 
            <Text style={text_st}>
                <Text style={{fontWeight:'bold'}}>{hh}:{mm}</Text>
                <Text>:{ss} {ap}</Text>
            </Text>
        </View>
    );
}