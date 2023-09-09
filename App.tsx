import { StatusBar } from 'expo-status-bar';
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';
 
export default function App() {
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home />: <Loading />}	
      <StatusBar style="light" translucent backgroundColor='transparent' />
    </ThemeProvider>
  );
}


