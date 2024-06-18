import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Configuration from '../screens/Configuration'
import { colors } from '../global/colors'
import { Platform, StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

const ConfigurationStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Configuration" component={Configuration} 
          options={{  title: 'CONFIGURACIÓN', 
                      headerTintColor: colors.bg_cream, 
                      headerStyle: styles.headerStack,
                      headerTitleStyle: styles.textHeader  }} />
    </Stack.Navigator>
  )
}

export default ConfigurationStackNavigator

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