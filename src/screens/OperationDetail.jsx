import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import Timer from '../components/Timer'
import { colors } from '../global/colors'

const OperationDetail = ({ tableSelected, setTableSelected = () => { } }) => {

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={() => setTableSelected('')}>
                    <Text>Atrás</Text>
                </Pressable>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>Correctas: <Text style={styles.correct}>12</Text></Text>
                <Text style={styles.infoText}>Incorrectas: <Text style={styles.incorrect}>12</Text></Text>
                <View style={styles.timer}>
                <Text style={styles.timerText}>Tiempo</Text>
                <Timer />
            </View>
                
            </View>
            <Text>La tabla seleccionada fue {tableSelected}</Text>
        </View>
    )
}

export default OperationDetail


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center',
    },
    infoText: {
        fontFamily: Platform.select({
			android: 'ComicNeue_700Bold',
			ios: 'ComicNeue-Bold',
		}),
        fontSize: 18
    },
    correct: {
        color: colors.legoGreen
    },
    incorrect: {
        color:colors.alert_red
    },
    timer: {
        alignItems: 'flex-end',
    },
    timerText: {
        fontFamily: Platform.select({
			android: 'ComicNeue_700Bold',
			ios: 'ComicNeue-Bold',
		}),
        fontSize: 18,
        width: 70,
        textAlign: 'center'
    }
})