import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [initialRoute, setInitialRoute] = useState('login');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setInitialRoute('home'); // Se o usuário estiver logado, navegue para Home
      } else {
        setInitialRoute('login'); // Caso contrário, vá para Login
      }
    });

    return () => unsubscribe(); // Limpa o listener ao desmontar
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName={initialRoute}>
        <Stack.Screen name="login"  options={{ headerShown: false }} />
        <Stack.Screen name="register"  options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="home"  options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
