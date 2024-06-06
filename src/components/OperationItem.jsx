import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'

/**
 * Componente que muestra cada una de las categorias
 * @param {*} item 
 * @returns 
 */
const OperationItem = ({item, setOperationSelected = () => {}}) => {
  return (
    <Pressable onPress={()=>setOperationSelected(item.id)}>
      <Card additionalStyles={styles.cardContainer}>
          <Text style={styles.cardText}>{item.name}</Text>
      </Card>
    </Pressable>
  )
}

export default OperationItem

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
        fontSize: 18,
        fontFamily: 'ComicNeue-Bold',
    }
})