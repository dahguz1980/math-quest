import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CategoryList from '../components/CategoryList'
import logo from '../../assets/logo.webp'

const Home = () => {

  return (
    <View style={styles.container}>
      <Header logourl={logo} />
      <CategoryList />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})