import { View, Text, StyleSheet, TouchableOpacity , Image, Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'; // Importamos useState
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withRepeat, 
  Easing 
} from 'react-native-reanimated';

// 1. Importe o componente de carregamento
import LoadingScreen from '../components/loadingScreen';

const welcomePage = () => {
  const router = useRouter();
  
  // 2. Adicione o estado para controlar o carregamento
  const [isLoading, setIsLoading] = useState(false);

  // Animação de Fade do Botão (como antes)
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  // 3. Função para Iniciar a Transição e o Loading
  const handleStartJourney = () => {
    setIsLoading(true); // Ativa a tela de loading
    
    // Configura um atraso (ex: 2000ms = 2 segundos) para exibir o GIF
    setTimeout(() => {
      return router.push('/(auth)/siginIn'); // Navega após o atraso
      // Você pode opcionalmente redefinir o isLoading para false aqui,
      // mas como o componente será desmontado, não é estritamente necessário.
    }, 2000); 
  };
  
  // 4. Se estiver carregando, exibe apenas a tela de Loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  // 5. Se NÃO estiver carregando, exibe a tela de boas-vindas
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mike Concursos</Text>
        <StatusBar style="auto" />
        
        <Animated.View style={[styles.box, animatedStyle]}>
          <TouchableOpacity 
            style={styles.button} 
            // 6. Altere o onPress para chamar a nova função
            onPress={handleStartJourney}
          >
            <Text style={styles.buttonText}>Iniciar Jornada!</Text>
          </TouchableOpacity>
        </Animated.View>
        
        <Image
          style={styles.image}
          source={require('../assets/images/go.jpg')}
        />
    </View>
  );
};

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
        borderColor: 'rgba(24, 202, 233, 0.1)',
        backgroundColor: 'black',
        ...Platform.select({
            ios: {
                shadowColor: '#f6f9fc',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.7,
                shadowRadius: 14,
            },
            android: {
                elevation: 14,
            },
        }),
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
    box: {}
});

export default welcomePage;