import { StyleSheet, Text, View, ImageBackground } from "react-native";
import background_image from '../../../assets/images/background_image.png'

export default function Profile() {
    return(
        <ImageBackground
          style={styles.backgroundImage}
          source={background_image}
        >
    
            <View style={styles.container}>
                <Text style={styles.text}>Pesquisa</Text>
            </View>
        </ImageBackground>
        )
    }
    
    const styles = StyleSheet.create({
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center'
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 30,
            color: '#000'
        }
    })