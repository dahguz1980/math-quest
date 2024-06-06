import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import operations from '../data/mathOperations.json'
import OperationItem from './OperationItem'

const OperationList = ({setOperationSelected = () => {}}) => {
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} scrollEnabled={false}
        data={operations}
        renderItem={({item}) => <OperationItem item={item} setOperationSelected={setOperationSelected} />}
      />
    </View> 
  )
}

export default OperationList

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%' ,
    flex: 1,
  },
  list: {
    width: "75%"
  }
})