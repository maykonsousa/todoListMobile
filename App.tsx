import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Input } from '@components/Input';
 
export default function App() {
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
    <Input 
       placeholder='Digite seu nome'
      />
      <StatusBar style="light" translucent backgroundColor='transparent' />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
