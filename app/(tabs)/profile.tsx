import { StyleSheet, TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router'

import { Text, View } from '@/components/Themed';
import { Ionicons } from '@expo/vector-icons';


export default function TabProfile() {
  const router = useRouter();

  const qra = 'Matias';
  return (
    <View style={styles.container}>
      <Ionicons name="skull" size={100} color="white" />
      <Text style={styles.title}>{qra}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity style ={styles.button} onPress={()=> router.push("/versionPro")}>
        <Text>Adiquirir Versão Pro <Ionicons name="skull" size={20} color="white" /></Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.button} onPress={()=> router.push("/editUser")}>
        <Text>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.button} onPress={()=> router.push("/siginUp")}>
        <Text>Sair</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
    width: "90%",
    alignItems: 'center',
    borderRadius: 5,
    padding: 20,
  },
});
