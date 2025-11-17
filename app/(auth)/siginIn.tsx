import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import LoadingScreenNew from '@/components/loadingScreenNew';


const siginIn = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false);

   // Animação de Fade do Botão (como antes)
  

  // 3. Função para Iniciar a Transição e o Loading
  const handleStartJourney = () => {
    setIsLoading(true); // Ativa a tela de loading
    
    // Configura um atraso (ex: 2000ms = 2 segundos) para exibir o GIF
    setTimeout(() => {
      router.push('/(tabs)'); // Navega após o atraso
      // Você pode opcionalmente redefinir o isLoading para false aqui,
      // mas como o componente será desmontado, não é estritamente necessário.
    }, 3000); 
  };
  
  // 4. Se estiver carregando, exibe apenas a tela de Loading
  if (isLoading) {
    return <LoadingScreenNew />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionForm}>
        <Text style={styles.title}>Informações do(a) <Ionicons name="skull" size={24} color="white" /></Text>
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

              <TouchableOpacity onPress={handleStartJourney} style={[styles.button]}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>

      </View>
      <Text>siginIn</Text>
      <TouchableOpacity onPress={() => router.push('/(auth)/siginUp')}>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f7fafa',
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
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgba(24, 202, 233, 0.1)',
        backgroundColor: '#000000',
        
    },
    buttonText: {
        color: '#f2f4f5',
        fontSize: 18,
        fontWeight: 'bold',
    },
    

})

export default siginIn