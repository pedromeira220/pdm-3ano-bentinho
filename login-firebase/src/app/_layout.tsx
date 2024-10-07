import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { AuthContextProvider } from '../contexts/auth-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [initialRoute, setInitialRoute] = useState('login');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setInitialRoute('home'); 
      } else {
        setInitialRoute('login');
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthContextProvider>
        <Stack initialRouteName={initialRoute}>
          <Stack.Screen name="login"  options={{ headerShown: false }} />
          <Stack.Screen name="register"  options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="home"  options={{ headerShown: false }} />
        </Stack>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
