import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux'
import { changeTheme, difficulty} from '../features/Preference/PreferenceSlice'

const Theme = () => {

    const dispacht = useDispatch()

    return (
        <View>
            <Pressable onPress={ () => dispacht(changeTheme('Dark')) } >
                <Text>Dark</Text>
            </Pressable>
            <Pressable onPress={ () => dispacht(changeTheme('Light')) } >
                <Text>Light</Text>
            </Pressable>
            <Pressable onPress={ () => dispacht(difficulty('EASY')) } >
                <Text>Facil</Text>
            </Pressable>
            <Pressable onPress={ () => dispacht(difficulty('HARD')) } >
                <Text>Dificil</Text>
            </Pressable>
        </View>
    )
}

export default Theme

const styles = StyleSheet.create({})