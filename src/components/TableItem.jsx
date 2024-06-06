import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'

import { colors } from '../global/colors';
import GameCard from './GameCard';
import Star from './Star';


const TableItem = ({tableName}) => {
  return (
    
        <GameCard additionalStyle={styles.additionalStyle}>
            <Text style={styles.numb}>{tableName}</Text>
            <Star repetitions={3} colors={[colors.legoLigthBlue,colors.legoLigthBlue,colors.legoLigthBlue]}/>
        </GameCard>
    
  )
}

export default TableItem

const styles = StyleSheet.create({
    numb: {
        fontFamily: 'ComicNeue-Bold',
        fontSize: 80,
        textAlign: 'center',
        color: '#102B4F',
        marginTop: 10,
        
    },
    additionalStyle: {
        margin: 15
    }
})