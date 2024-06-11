import { Image, Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Header = ({logourl}) => {

  return (
      <View style={styles.headerContainer}>
          <Image source={logourl} style={styles.logo}></Image>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 155,
        backgroundColor: colors.bg_cream,
        borderBottomWidth: 4,
        borderBottomColor: colors.darkBlue,
    },
    logo: {
        width: 150, // Ajusta el tamaño según sea necesario
        height: 150,
        resizeMode: 'contain',
      },
})