import { Platform, SafeAreaView, StyleSheet, StatusBar, Text, useWindowDimensions, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import logo from './assets/logo.webp'
import Header from './src/components/Header';
import ItemListOperation from './src/screens/ItemListOperation';
import Home from './src/screens/Home';
import OperationDetail from './src/screens/OperationDetail';
import { ComicNeue_700Bold } from '@expo-google-fonts/comic-neue';
import { colors } from './src/global/colors';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator()

const App = () => {

	// obtener el tanaño del dispositivo
	const { width, height } = useWindowDimensions()
	const MIN_WIDTH = 440;  // Ancho mínimo requerido
	const MIN_HEIGHT = 970; // Altura mínima requerida

	let [fontsLoaded, fontError] = useFonts({
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

	const headerTitle = (route) =>  {
		const routeName = route.name;
	  
		switch (routeName) {
		  case 'Home':
			return 'OPERACIONES';
		  case 'ItemListOperation':
			return 'TABLAS DE ...';
		  case 'OperationDetail':
			return 'TABLA DE  ... DEL  ... ';
		  default:
			return 'App';
		}
	  }

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.containerSafe}>
				<Header logourl={logo} />
				<NavigationContainer>
					<Stack.Navigator initialRouteName='Home' screenOptions={({route}) => ({
						headerTitle: headerTitle(route)})}>
						<Stack.Screen name="Home" component={Home}/>
						<Stack.Screen name="ItemListOperation" component={ItemListOperation} />
						<Stack.Screen name="OperationDetail" component={OperationDetail} />
					</Stack.Navigator>
				</NavigationContainer>
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
		backgroundColor: colors.bg_white,
	},
});
