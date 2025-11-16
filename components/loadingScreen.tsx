// Este é o componente que mostra o GIF
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  const policeGifUrl = require('../assets/images/pm.jpg'); // Certifique-se de que o caminho está correto
  
  return (
    <View style={loadingStyles.container}>
      <Text style={loadingStyles.text}>Iniciando Jornada...</Text>
      <Image
        source={policeGifUrl}
        style={loadingStyles.gif}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#1e90ff" style={loadingStyles.spinner} />
    </View>
  );
};

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  gif: {
    width: 350,
    height: 350,
  },
  spinner: {
    marginTop: 30,
  },
});

export default LoadingScreen;