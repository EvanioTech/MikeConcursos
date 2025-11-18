import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const time = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="hourglass" size={100} color="#fff" />
      <Text style={{color: '#fff'}}>Time Screen</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0101',
  },
});
export default time