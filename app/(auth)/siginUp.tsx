import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const siginUp = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>siginUp</Text>
      <TouchableOpacity onPress={() => router.push('(tabs)')}>
        <Text>Go to Home </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeebeb',
    }
})

export default siginUp