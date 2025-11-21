import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const editUser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>editUser</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default editUser