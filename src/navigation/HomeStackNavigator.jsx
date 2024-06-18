import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemListOperation from "../screens/ItemListOperation"
import Home from "../screens/Home"
import OperationDetail from "../screens/OperationDetail"
import { Platform, StyleSheet } from 'react-native';
import { colors } from '../global/colors';



const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {

    const headerTitle = (route) =>  {
		const routeName = route.name;
	  
		switch (routeName) {
		  case 'Home':
			return 'JUEGO MATH QUEST';
		  case 'ItemListOperation':
			return 'TABLAS DE ...';
		  case 'OperationDetail':
			return 'TABLA DE  ... DEL  ... ';
		  default:
			return 'App';
		}
	}

  return (
	<Stack.Navigator initialRouteName='Home' screenOptions={({route}) => ({
		headerTitle: headerTitle(route), 
		headerStyle: styles.headerStack, 
		headerTintColor: colors.bg_cream, 
		headerTitleStyle: styles.textHeader })}>
		<Stack.Screen name="Home" component={Home}/>
		<Stack.Screen name="ItemListOperation" component={ItemListOperation} />
		<Stack.Screen name="OperationDetail" component={OperationDetail} />
	</Stack.Navigator>
	
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({
	headerStack: {
		backgroundColor: colors.darkBlue,
	},
	textHeader: {
		fontFamily: Platform.select({
			android: 'ComicNeue_700Bold',
			ios: 'ComicNeue-Bold',
		})
	}
})