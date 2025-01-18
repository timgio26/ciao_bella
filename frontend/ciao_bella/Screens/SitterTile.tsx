import { Text, View, StyleSheet } from 'react-native';
import { dogsitter } from './SitterList';

type SitterTileProp = {
    data: dogsitter;
};

export function SitterTile({ data }: SitterTileProp) {
    const roundedRating = Math.round(data.rating)
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.city}>{data.city}</Text>
      <Text style={styles.text}>
        {data.rating}
      <Text style={styles.rating}>{"⭐".repeat(roundedRating)}</Text>
      </Text>
      <Text style={styles.text}>{data.pricePerDay} PLN per day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  city: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#ffd700',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});
