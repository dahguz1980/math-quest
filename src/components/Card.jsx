import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children, additionalStyles}) => {
  return (
    <View style={{...styles.container,...additionalStyles}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
    }
})