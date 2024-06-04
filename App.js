import { Platform, SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native';
import {colors} from './src/global/colors'
import Home from './src/screens/Home';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
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
