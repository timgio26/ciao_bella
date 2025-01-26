import { Text, View } from 'react-native';
import {Review} from "../utils/fakeDB"
import { GlobalStyles } from '../constants/styles';

type ReviewTileProp = {
    data:Review
}

export function ReviewTile({data}:ReviewTileProp){
    return (
      <View style={{gap:5,marginHorizontal:10,borderWidth:2,borderColor:GlobalStyles.colors.primary400,padding:10,borderRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
        <Text>{"⭐".repeat(data.rating)}</Text>
        <Text>{data.order_date}</Text>

        </View>
        <Text>{data.review}</Text>
        <Text style={{textAlign:'right',fontWeight:"bold"}}>{data.customer_name}</Text>
      </View>
    );
}