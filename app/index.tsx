import { View, Text, StyleSheet, StatusBar, TouchableOpacity , Image} from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import Animated, {
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat, 
  Easing 
} from 'react-native-reanimated';

const welcomePage = () => {
  const router = useRouter()
  // 1. Criar um valor compartilhado para a opacidade
  const opacity = useSharedValue(0);

  // 2. Definir o estilo animado que usa o valor compartilhado
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  // 3. Usar useEffect para iniciar a animação
  useEffect(() => {
    // Alterna a opacidade entre 1 (visível) e 0 (invisível)
    opacity.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.linear }), // Fade In
      -1, // Repetição infinita
      true // Reverte a animação a cada repetição (Fade Out)
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mike Concursos</Text>
        <StatusBar style="auto" />
        
        {/* Aplica o estilo animado de opacidade no Animated.View */}
        <Animated.View style={[styles.box, animatedStyle]}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('(auth)/siginIn')}
          >
            <Text style={styles.buttonText}>Iniciar Jornada!</Text>
          </TouchableOpacity>
        </Animated.View>
        
        <Image
          style={styles.image}
          source={require('../assets/images/go.jpg')}
        />
    </View>
  )
}

// ... (Restante dos estilos permanece o mesmo)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    button: {
        marginTop: 70,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgba(223, 239, 241, 0.1)',
        // As propriedades de sombra (boxShadow) são específicas da web e podem ser ignoradas ou substituídas
        // por `elevation` (Android) ou `shadow*` (iOS) no React Native padrão.
    },
    buttonText: {
        color: '#f2f4f5',
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 44,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 150,
    },
    image: {
        width: "100%",
        height: 590,
        marginTop: 30,
    },
    // Adicionei um estilo 'box' vazio pois ele era referenciado no seu Animated.View original
    box: {
      // Este estilo pode ser ajustado se o Animated.View precisar de dimensões específicas
    }
})

export default welcomePage