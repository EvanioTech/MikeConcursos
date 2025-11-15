import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const siginIn = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>siginIn</Text>
      <TouchableOpacity onPress={() => router.push('siginUp')}>
        <Text>Go to Sigin Up</Text>
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

export default siginIn