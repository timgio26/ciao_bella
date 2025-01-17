import {Text,View,StyleSheet} from 'react-native'

export function SitterList(){
    return(
        <View>
            <Text style={styles.header1}>
                this is SitterList
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
