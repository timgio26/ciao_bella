import {Text,View,StyleSheet} from 'react-native'

export function Order(){
    return(
        <View>
            <Text style={styles.header1}>
                this is Order page
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
