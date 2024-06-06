import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Star = ({repetitions, colors}) => {

  const items = Array.from({ length: repetitions }, (_, i) => i + 1);
  
  return (
    <View style={styles.starContainer}>
        {items.map((item) => (
          <AntDesign name='star' size={24} color={colors[item-1]}  />
        ))}
    </View>
  )
}

export default Star

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})