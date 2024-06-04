import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'

/**
 * Componente que muestra cada una de las categorias
 * @param {*} item 
 * @returns 
 */
const CategoryItem = ({item}) => {
  return (
    <Card additionalStyles={styles.cardContainer}>
      <Text style={styles.cardText}>{item.name}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        justifyContent: "center",
        marginTop: 45,
        height: 70,
        backgroundColor: 'white',
        borderLeftColor: colors.legoBlue,
        borderRightColor: colors.legoLigthBlue,
        borderTopColor: colors.legoYellow,
        borderBottomColor: colors.legoRed
    },
    cardText: {
        textAlign: "center",
        fontSize: 18
    }
})