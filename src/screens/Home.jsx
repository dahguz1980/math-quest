import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OperationItem from '../components/OperationItem'
import operations from "../data/mathOperations.json"
import { colors } from '../global/colors'

const Home = ({navigation}) => {

  return (
    <View style={styles.container}>
        <FlatList style={styles.list} scrollEnabled={false}
          data={operations}
          renderItem={({item}) => <OperationItem item={item} navigation={navigation} />}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.bg_cream,
    alignItems: 'center'
  },
  bg: {
    width: '100%',
    
  },
  list: {
    width: "75%"
  }
})