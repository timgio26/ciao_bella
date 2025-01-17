import {Text,View,StyleSheet} from 'react-native'

export function Home(){
    return(
        <View>
            <Text style={styles.header1}>
                this is Home page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header1:{
        fontSize:20,
        fontWeight:'bold'
    }
})
