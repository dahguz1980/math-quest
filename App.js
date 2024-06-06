import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useCallback, useState } from 'react';
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from 'expo-font';
import logo from './assets/logo.webp'
import Header from './src/components/Header';
import ItemListOperation from './src/screens/ItemListOperation';
import Home from './src/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {

  /* Control de Filtrado de Operaciones y Tablas */
  const [operationSelected, setOperationSelected] = useState('')
  
  /* Configurar la fuente */

  const [fontsLoaded, fontError] = useFonts((
    {'ComicNeue-Regular': require('./assets/fonts/ComicNeue-Regular.ttf')},
    {'ComicNeue-Bold': require('./assets/fonts/ComicNeue-Bold.ttf')}
  ))

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  /* Fin configuracion de fuente */



  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Header logourl={logo} />
      { !operationSelected  ? (
        <Home setOperationSelected={setOperationSelected}/>
      ) : (
        <ItemListOperation operationSelected={operationSelected}  setOperationSelected={setOperationSelected} /> 
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white'
  },
});
