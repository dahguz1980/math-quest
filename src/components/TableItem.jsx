import { Image, Platform, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

import { colors } from '../global/colors';
import Star from './Star';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { titleTable } from '../features/HeaderTitle/HeaderTitleSlice';


const TableItem = ({ table, navigation}) => {

	const cargarImagen = require.context("../../assets/lego", true);
	const dispacht = useDispatch()
	
	const gotoOperationDetail = () => {
		dispacht(titleTable(table.shortName))
		navigation.navigate("OperationDetail",{tableId: table.shortName})
	}


	return (
		<Pressable onPress={()=>gotoOperationDetail()}>
			<Card additionalStyles={styles.additionalStyle}>
				<Image source={cargarImagen(`./${ table.logo }`)} style={styles.image} />
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
        justifyContent: "space-evenly",
		alignItems: "center",
        borderLeftColor: colors.legoBlue,
        borderRightColor: colors.legoLigthBlue,
        borderTopColor: colors.legoGreen,
        borderBottomColor: colors.legoRed
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: 'contain'
	}
})