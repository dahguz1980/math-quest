import { Platform, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

import { colors } from '../global/colors';
import GameCard from './GameCard';
import Star from './Star';
import Card from './Card';


const TableItem = ({ table, navigation}) => {


	return (
		<Pressable onPress={()=>navigation.navigate("OperationDetail",{tableId: table.shortName})}>
			<Card additionalStyles={styles.additionalStyle}>
				<Text style={styles.numb}>{table.shortName}</Text>
				<Star repetitions={3} colors={[colors.legoLigthBlue, colors.legoLigthBlue, colors.legoLigthBlue]} />
			</Card>
		</Pressable>
	)
}

export default TableItem

const styles = StyleSheet.create({
	numb: {
		fontFamily: Platform.select({
			android: 'ComicNeue_700Bold',
			ios: 'ComicNeue-Bold',
		}),
		fontSize: 80,
		textAlign: 'center',
		color: colors.darkBlue,
		marginTop: 10,

	},
	additionalStyle: {
		margin: 15,
		width: 158,
        height: 154,
        justifyContent: "center",
        backgroundColor: 'white',
        borderLeftColor: colors.legoBlue,
        borderRightColor: colors.legoLigthBlue,
        borderTopColor: colors.legoGreen,
        borderBottomColor: colors.legoRed
	}
})