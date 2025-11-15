import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const welcomePage = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: '#0c0909'}}>Mike Concursos</Text>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.button} onPress={() => router.push('(auth)/siginIn')}>
            <Text>Iniciar Jornada!</Text>
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeebeb',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#f0e68c',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
})
export default welcomePage