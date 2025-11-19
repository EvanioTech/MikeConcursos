import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Stopwatch from '@/components/stopwatch'

const TabTime = () => {
  return (
    <View style={styles.container}>
      <Stopwatch />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
export default TabTime