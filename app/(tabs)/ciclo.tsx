import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CardCiclo from '@/components/cardCiclo';


const TabCiclo = () => {
  return (
    <View style={styles.container}>
      <CardCiclo />
      <CardCiclo />
      <CardCiclo />
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

export default TabCiclo