import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { getLogin } from '../service/getLogin';
import { router } from 'expo-router';
import { FirebaseError } from 'firebase/app';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<{message: string} | FirebaseError | null>(null)

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return
    }       
      // Lógica de login pode ser implementada aqui
      Alert.alert('Login', `Email: ${email}\nSenha: ${password}`);
      getLogin(email, password).then(user => {
        router.replace("/home")
      })
      .catch(error => {
        if(error instanceof FirebaseError) {
          console.log("> firebase error", error.message);
          Alert.alert('Erro', error.message);
          setError(error)
          return
        }

        setError({
          message: error.message
        })
        
      })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <View>
      <TouchableOpacity
        onPress={() => {
          router.push("/register")
        }}
        >
          <Text style={{
            textAlign: "center",
            marginTop: 16,
            fontWeight: 'bold'
          }}>Clique aqui para criar uma conta</Text>
        </TouchableOpacity>
        <Text style={{
          textAlign: "center",
          marginTop: 8,
          color: "red"
        }}>{error?.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});