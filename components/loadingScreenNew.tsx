// Este é o componente que mostra o GIF
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat, 
  Easing 
} from 'react-native-reanimated';

const LoadingScreenNew = () => {
  const policeGifUrl = require('../assets/images/cav.jpg'); // Certifique-se de que o caminho está correto
  
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.linear }),
      -1,
      true
    );
  }, []);
  return (
    <View style={loadingStyles.container}>
      <Text style={loadingStyles.text}>Iniciando Jornada...</Text>
      <Animated.View style={[ animatedStyle]}>
      <Image
        source={policeGifUrl}
        style={loadingStyles.gif}
        resizeMode="contain"
      />
      </Animated.View>
      <ActivityIndicator size="large" color="#fff" style={loadingStyles.spinner} />
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
  box: {
    
  },
  
});

export default LoadingScreenNew;