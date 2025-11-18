import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ciclo = () => {
  return (
    <View style={styles.container}>
      <Text>Page ciclo de estudos</Text>
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

export default ciclo