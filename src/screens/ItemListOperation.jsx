import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import mathTables from '../data/mathTables.json'
import TableItem from '../components/TableItem'
import { colors } from '../global/colors'

const ItemListOperation = ({operationSelected, setOperationSelected}) => {

    const [mathTablesFiltered,setMathTablesFilteres] = useState([])

    useEffect( () => {
        const mathTablesFilter = mathTables.filter(table=>table.idOperation===operationSelected)
        
        if (mathTablesFilter.length>0) {
            setMathTablesFilteres(mathTablesFilter)
        } else {
            setMathTablesFilteres([])
        }
    }, [operationSelected])

  return (
    <View style={styles.container}>
        <View>
            <Pressable onPress={() => setOperationSelected('')}>
                <Text>Atrás</Text>    
            </Pressable>  
        </View>
        
        <FlatList 
            keyExtractor={ table => table.id.toString()} numColumns={2} showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.tableContainer} 
            data={mathTablesFiltered}
            bounces={false} // Desactiva el efecto de rebote
            renderItem={ ({item}) => 
                <Pressable>
                    <TableItem tableName={item.shortName} />
                </Pressable>
            }
            />
        
    </View>

  )
}

export default ItemListOperation

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tableContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})