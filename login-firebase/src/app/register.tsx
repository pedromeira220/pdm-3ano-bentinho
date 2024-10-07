import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { getLogin } from '../service/getLogin';
import { router } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { createUser } from '../service/createUser';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState<{ message: string } | FirebaseError | null>(null)

  const handleRegister = () => {
    if (email === '' || password === '' || confirmPassword === '' || fullName === '' || birthDate === '') {
      setError({
        message: 'Por favor, preencha todos os campos'
      });
      return;
    }

    if (password !== confirmPassword) {
      setError({
        message: 'As senhas precisam ser iguais'
      })
      return
    }

    createUser({email, password}).then(user => {
      return setDoc(doc(db, "users", user.uid), {
        fullName: fullName,
        birthDate: birthDate,
        email: email,
      })
    })
    .then(() => {
      router.replace("/login")
    })
      .catch(error => {
        if (error instanceof FirebaseError) {
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
      <Text style={styles.title}>Criar conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (DD/MM/AAAA)"
        value={birthDate}
        onChangeText={setBirthDate}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Criar conta" onPress={handleRegister} />
      <View>

        <TouchableOpacity
          onPress={() => {
            router.push("/login")
          }}
        >
          <Text style={{
            textAlign: "center",
            marginTop: 16,
            fontWeight: 'bold'
          }}>Clique aqui para logar na sua conta</Text>
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