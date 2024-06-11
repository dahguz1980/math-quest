import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import mathTables from '../data/mathTables.json'
import TableItem from '../components/TableItem'

const ItemListOperation = ({operationSelected, setOperationSelected=()=>{},setTableSelected=()=>{}}) => {

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
            contentContainerStyle={styles.tableContainer} alwaysBounceVertical={false}
            data={mathTablesFiltered}
            renderItem={ ({item}) => 
                <TableItem table={item} setTableSelected={setTableSelected}  />
            }
            />
        
    </View>

  )
}

export default ItemListOperation

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    tableContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    }
})