import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, useWindowDimensions, View } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './src/global/colors';
import { ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
import logo from './assets/logo.webp'
import Header from './src/components/Header';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/store';


const App = () => {

	// obtener el tanaño del dispositivo
	const { width, height } = useWindowDimensions()
	const MIN_WIDTH = 300;  // Ancho mínimo requerido
	const MIN_HEIGHT = 800; // Altura mínima requerida

	const [fontsLoaded, fontError] = useFonts({
		ComicNeue_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	if (width < MIN_WIDTH || height < MIN_HEIGHT) {
		return (
			<View style={styles.unsupportedContainer}>
				<Text style={styles.unsupportedText}>
					Este dispositivo no es compatible con la aplicación. Por favor, use un dispositivo con una pantalla más grande.
				</Text>
			</View>
		);
	}

	
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.containerSafe}>
				<Provider store={store}>
					<Header logourl={logo} />
					<Navigator />
				</Provider>
			</SafeAreaView>
		</View>
	);
}

export default App

const styles = StyleSheet.create({
	unsupportedContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: colors.bg_white,
	},
	unsupportedText: {
		fontSize: 18,
		color: colors.alert_red,
		textAlign: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: colors.bg_cream
	},
	containerSafe: {
		flex: 1,
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: colors.bg_cream,
	},
});
