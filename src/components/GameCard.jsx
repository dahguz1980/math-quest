import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import tableBG from '../../assets/tableBg.png'

const GameCard = ({children, additionalStyle}) => {
  return (
    <View style={{...styles.container,...additionalStyle}}>
        <ImageBackground source={tableBG} style={styles.bg}>
            {children}
        </ImageBackground>
    </View>
  )
}

export default GameCard

const styles = StyleSheet.create({
    container: {
        width: 158,
        height: 154   
    },
    bg: {
        flex:1, // Contiene la imagen sin estirarla
    }
})