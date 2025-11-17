import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


const siginIn = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.sectionForm}>
            <TextInput 
            placeholder="Digite seu QRA" 
            placeholderTextColor={"black"}
            style={styles.input} />
            <TextInput 
            placeholder="Digite seu Email" 
            placeholderTextColor={"black"}
            style={styles.input} />
            <TextInput 
            placeholder="Digite sua senha" 
            placeholderTextColor={"black"}
            secureTextEntry={true}
             style={styles.input} />

      </View>
      <Text>siginIn</Text>
      <TouchableOpacity onPress={() => router.push('siginUp')}>
        <Text style={styles.textButton}>Go to Sigin Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f0101',
    },
    sectionForm: {
        width: '80%',
        height: '50%',
        backgroundColor: '#0f0101',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    textButton: {
        color: '#00ffff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default siginIn