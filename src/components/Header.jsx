import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo1 from '../../assets/logo.webp'

const Header = ({logourl, title}) => {

  return (
      <View style={styles.headerContainer}>
          <Image source={logourl} style={styles.logo}></Image>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 150,
        backgroundColor: '#FFFBEA',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    logo: {
        width: 150, // Ajusta el tamaño según sea necesario
        height: 150,
        resizeMode: 'contain',
      },
})