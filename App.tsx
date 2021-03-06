import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/use-auth';

export default function App(){
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}