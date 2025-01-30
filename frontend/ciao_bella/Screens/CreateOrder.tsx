import {Text,View,StyleSheet} from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context';

export function CreateOrder(){
    return(
        <View>
            <View style={{alignItems:'center'}}>

            <Text style={{fontSize:24,fontWeight:"100"}}>Create Booking</Text>
            </View>
            <Text>Dog Sitter:</Text>
            <Text style={{fontWeight:'bold'}}>Create Booking</Text>
            <Text>Dog In Date:</Text>
            <Text style={{fontWeight:'bold'}}>Create Booking</Text>
            <Text>Dog Out Date:</Text>
            <Text style={{fontWeight:'bold'}}>Create Booking</Text>
        </View>
    )
}