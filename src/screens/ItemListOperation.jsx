import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import mathTables from '../data/mathTables.json'
import TableItem from '../components/TableItem'
import { colors } from '../global/colors'

const ItemListOperation = ({route, navigation}) => {

    const { itemId } = route.params;
    const [mathTablesFiltered, setMathTablesFiltered] = useState([])

    useEffect( () => {
        const mathTablesFilter = mathTables.filter(table=>table.idOperation===itemId)
        
        if (mathTablesFilter.length>0) {
            setMathTablesFiltered(mathTablesFilter)
        } else {
            setMathTablesFiltered([])
        }
    }, [itemId])

  return (
    <View style={styles.container}>
        <FlatList 
            keyExtractor={ table => table.id.toString()} numColumns={2} showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.tableContainer} alwaysBounceVertical={false}
            data={mathTablesFiltered}
            renderItem={ ({item}) => 
                <TableItem table={item} navigation={navigation} />
            }
            />
    </View>

  )
}

export default ItemListOperation

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: colors.bg_white,
    },
    tableContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    }
})