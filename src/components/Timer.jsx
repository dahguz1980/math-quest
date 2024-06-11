import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../global/colors';

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
      return () => clearInterval(intervalRef.current);
    }, []);

    return (
    <View style={styles.container}>
       <Text style={styles.text}>{seconds}</Text>
    </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    container: {
        width: 70,
    },
    text: {
        fontSize: 25,
        color: colors.legoGreen,
        fontFamily: 'ComicNeue_700Bold',
        textAlign: 'center'
        
    }
})