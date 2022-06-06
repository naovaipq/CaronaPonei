import React from 'react';
import { Appearance } from 'react-native-web';
import themes from './src/themes';
import { ThemeProvider } from 'styled-components';
import Navigation from './src/stack/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  //obtendo o tema padrão do dispositivo móvel
  const deviceTheme = Appearance.getColorScheme()
  const theme = themes[deviceTheme] || themes.light

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
    
  );
}
