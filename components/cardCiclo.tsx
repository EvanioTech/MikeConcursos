import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// 1. Defina o Type ou Interface fora do componente (boas práticas)
type Props = {
    Title: string;
}

// 2. Associe o tipo Props ao argumento da função
const CardCiclo = ({ Title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '90%',
        height: 200,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
})

export default CardCiclo