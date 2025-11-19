import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Vibration, Keyboard, TouchableWithoutFeedback } from 'react-native';

const Stopwatch = () => {
  // --- Configurações (Editáveis) ---
  const [config, setConfig] = useState({
    focus: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  // --- Estados do Timer ---
  // Modos: 'FOCUS', 'SHORT', 'LONG'
  const [mode, setMode] = useState('FOCUS'); 
  const [timeLeft, setTimeLeft] = useState(config.focus * 60);
  const [isActive, setIsActive] = useState(false);
  const [cycles, setCycles] = useState(0); // Quantas sessões de foco completadas
  
  // --- Estado de Edição ---
  const [isEditing, setIsEditing] = useState(false);
  const [tempConfig, setTempConfig] = useState({ ...config });

  // Lógica do Timer
  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      // O tempo acabou!
      clearInterval(interval);
      setIsActive(false);
      Vibration.vibrate();
      handleTimerComplete();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Decide o que acontece quando o tempo acaba
  const handleTimerComplete = () => {
    if (mode === 'FOCUS') {
      const newCycles = cycles + 1;
      setCycles(newCycles);

      if (newCycles % 4 === 0) {
        // A cada 4 ciclos, pausa longa
        switchMode('LONG');
      } else {
        // Pausa curta normal
        switchMode('SHORT');
      }
    } else {
      // Se acabou a pausa (curta ou longa), volta pro foco
      switchMode('FOCUS');
    }
  };

  // Função auxiliar para trocar de modo e resetar o tempo
  const switchMode = (newMode) => {
    setMode(newMode);
    if (newMode === 'FOCUS') setTimeLeft(config.focus * 60);
    else if (newMode === 'SHORT') setTimeLeft(config.shortBreak * 60);
    else if (newMode === 'LONG') setTimeLeft(config.longBreak * 60);
  };

  // Salvar Configurações
  const handleSaveSettings = () => {
    setConfig(tempConfig);
    setIsEditing(false);
    // Reseta tudo ao salvar para aplicar as mudanças
    setIsActive(false);
    setMode('FOCUS');
    setCycles(0);
    setTimeLeft(tempConfig.focus * 60);
  };

  // Formata MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Cores dinâmicas baseadas no modo
  const getBackgroundColor = () => {
    if (mode === 'FOCUS') return 'black'; // Vermelho claro
    if (mode === 'SHORT') return '#F0FFF4'; // Verde claro
    return '#E3F2FD'; // Azul claro (Pausa longa)
  };

  const getTextColor = () => {
    if (mode === 'FOCUS') return '#D32F2F';
    if (mode === 'SHORT') return '#388E3C';
    return '#1976D2';
  };

  // --- RENDERIZAÇÃO DA TELA DE CONFIGURAÇÃO ---
  if (isEditing) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Configurações (min)</Text>
          
          <View style={styles.inputGroup}>
            <Text>Foco:</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={String(tempConfig.focus)}
              onChangeText={(t) => setTempConfig({...tempConfig, focus: Number(t)})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text>Pausa Curta:</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={String(tempConfig.shortBreak)}
              onChangeText={(t) => setTempConfig({...tempConfig, shortBreak: Number(t)})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text>Pausa Longa:</Text>
            <TextInput 
              style={styles.input} 
              keyboardType="numeric" 
              value={String(tempConfig.longBreak)}
              onChangeText={(t) => setTempConfig({...tempConfig, longBreak: Number(t)})}
            />
          </View>

          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSaveSettings}>
            <Text style={styles.buttonText}>Salvar e Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  // --- RENDERIZAÇÃO DO TIMER PRINCIPAL ---
  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <View style={styles.header}>
        <Text style={[styles.statusText, { color: getTextColor() }]}>
          {mode === 'FOCUS' ? 'HORA DE FOCAR' : mode === 'SHORT' ? 'PAUSA CURTA' : 'PAUSA LONGA'}
        </Text>
        <Text style={styles.cycleText}>Sessão #{cycles + 1}</Text>
        {mode === 'FOCUS' && <Text style={styles.cycleHint}>(Pausa longa na sessão 4)</Text>}
      </View>

      <View style={styles.timerContainer}>
        <Text style={[styles.timerText, { color: getTextColor() }]}>
          {formatTime(timeLeft)}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setIsActive(!isActive)}>
          <Text style={styles.buttonText}>{isActive ? 'Pausar' : 'Iniciar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => switchMode(mode)}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.configButton} onPress={() => setIsEditing(true)}>
        <Text style={styles.configButtonText}>⚙️ Editar Tempos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0f0101',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  cycleText: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
  },
  cycleHint: {
    fontSize: 12,
    color: '#999',
  },
  timerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 40,
  },
  timerText: {
    fontSize: 70,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  configButton: {
    padding: 10,
  },
  configButtonText: {
    color: '#555',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  // Estilos do formulário
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginTop: 5,
    backgroundColor: '#f9f9f9',
  },
});

export default Stopwatch;