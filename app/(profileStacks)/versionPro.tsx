import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const versionPro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>versionPro por 299$</Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default versionPro