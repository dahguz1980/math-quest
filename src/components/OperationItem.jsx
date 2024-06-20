import { Image, Platform, Pressable, StyleSheet, Text } from 'react-native'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { titleOperation } from '../features/HeaderTitle/HeaderTitleSlice'
import { colors } from '../global/colors'

/**
 * Componente que muestra cada una de las categorias
 * @param {*} item 
 * @returns 
 */
const OperationItem = ({item, navigation}) => {

  const cargarImagen = require.context("../../assets", true);

  const dispacht = useDispatch()

  const gotoOperationSelected = () => {
      dispacht(titleOperation(item.name))
      navigation.navigate("ItemListOperation", {itemId:item.id})
  }

  return (
    <Pressable onPress={()=>gotoOperationSelected()}>
      <Card additionalStyles={styles.cardContainer}>
        <Image source={cargarImagen(`./${ item.logo_light }`)}  style={styles.image} />
        <Text style={styles.cardText}>{item.name}</Text>
      </Card>
    </Pressable>
  )
}

export default OperationItem

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 30,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: colors.darkBlue,
        borderRadius: '15'
    },
    cardText: {
        width: '100%',
        textAlign: "center",
        fontSize: 36,
        fontFamily: Platform.select({
          android: 'ComicNeue_700Bold',
          ios: 'ComicNeue-Bold',
        }),
    },
    image: {
      width: 65,
      height: 65,
      resizeMode: 'contain',
      
    }
})