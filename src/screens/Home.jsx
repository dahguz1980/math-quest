import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OperationList from '../components/OperationList'
const Home = ({setOperationSelected = () => {}}) => {

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <OperationList setOperationSelected={setOperationSelected} />
      </View>
      <Image source={require('../../assets/bg_app.png')} style={styles.bg} ></Image>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  listContainer: {
    height: 350,
  },  
  bg: {
    width: '100%',
    
  }
})