import { StyleSheet, TouchableOpacity } from 'react-native';


import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Mike Concursos!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.titleUpload}>Faça upload do Edital</Text>
      <TouchableOpacity>
        <View style={styles.uploadBox}>
        <Text style={styles.textUpload}>Selecionar arquivo</Text>
        </View>
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
    marginBottom: 100,
  },
  titleUpload: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  textUpload: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  uploadBox: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'rgba(24, 202, 233, 0.1)',
    backgroundColor: '#011338',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
