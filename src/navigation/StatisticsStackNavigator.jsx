import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Statistics from '../screens/Statistics'
import { colors } from '../global/colors'
import { Platform, StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

const StatisticsStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Statistics" component={Statistics} 
        options={{  title: 'ESTADÍSTICAS', 
                    headerTintColor: colors.bg_cream, 
                    headerStyle: styles.headerStack,
                    headerTitleStyle: styles.textHeader }}/>
    </Stack.Navigator>
  )
}

export default StatisticsStackNavigator

const styles = StyleSheet.create({
	headerStack: {
		backgroundColor: colors.darkBlue
	},
	textHeader: {
		fontFamily: Platform.select({
			android: 'ComicNeue_700Bold',
			ios: 'ComicNeue-Bold',
		})
	}
})