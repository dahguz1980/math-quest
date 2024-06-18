import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
import StatisticsStackNavigator from './StatisticsStackNavigator'
import ConfigurationStackNavigator from './ConfigurationStackNavigator'
import { colors } from '../global/colors'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions=
        {
            {
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarActiveBackgroundColor: colors.legoBlue,
            }
        }
        
    >
        <Tab.Screen name='Home' component={HomeStackNavigator} options={{
            tabBarIcon:({focused}) => {
                return (
                    <View>
                        <Ionicons name="game-controller-outline" size={24} color={colors.bg_cream} />
                    </View>
                )
            }
        }}/>
        <Tab.Screen name='Statistics' component={StatisticsStackNavigator} options={{
            tabBarIcon:({focused}) => {
                return (
                    <View>
                        <Feather name="bar-chart" size={24} color={colors.bg_cream} />
                    </View>
                )
            }
        }}/>
        <Tab.Screen name='Configuration' component={ConfigurationStackNavigator} options={{
            tabBarIcon:({focused}) => {
                return (
                    <View>
                        <Feather name="settings" size={24} color={colors.bg_cream} />
                    </View>
                )
            }
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: colors.darkBlue,
        color: colors.bg_white,
        
    }
})