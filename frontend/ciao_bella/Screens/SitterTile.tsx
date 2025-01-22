import { Text, View, StyleSheet } from 'react-native';
import { dogsitter } from './SitterList';
import { GlobalStyles } from '../constants/styles';

type SitterTileProp = {
    data: dogsitter;
};

export function SitterTile({ data }: SitterTileProp) {
    const roundedRating = Math.round(data.rating)
  return (
    <View style={styles.container}>
      <View style={styles.imgplaceholder}>
        <Text>no img</Text>
      </View>
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.text}>
        <Text style={styles.rating}>{"⭐".repeat(roundedRating)}</Text>
        {data.rating}
        </Text>
        <Text style={styles.text}>{data.pricePerDay} PLN per day</Text>
        <Text style={styles.city}>{data.city}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal:15,
    marginVertical: 5,
    marginHorizontal:10,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderColor:GlobalStyles.colors.primary400,
    borderWidth:2,
    flexDirection:"row",
    gap:10,
    alignItems:'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  city: {
    fontSize: 16,
    color: '#888',
    // marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#ffd700',
    // marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  imgplaceholder:{
    width: 100,
    height: 100,
    borderRadius: 999,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  }
});
