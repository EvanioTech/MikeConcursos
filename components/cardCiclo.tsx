import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardCiclo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>cardCiclo</Text>
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