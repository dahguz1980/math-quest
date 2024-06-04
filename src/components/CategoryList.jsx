import { FlatList, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import CategoryItem from './CategoryItem'

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList style={styles.list}
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
      <Image source={require('../../assets/bg_app.png')} style={styles.bg} ></Image>
    </View> 
  )
}

export default CategoryList

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%' ,
    flex: 1,
  },
  list: {
    width: "75%"
  },
  bg: {
    width: '100%',
    height: 330
  }
})