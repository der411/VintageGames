import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';

interface Product {
  id: string;
  name: string;
}

const PRODUCTS: { [key: string]: Product[] } = {
  '1': [
    { id: 'a', name: 'Roi Lion' },
    { id: 'b', name: 'Pocahontas' },
  ],
  '2': [
    { id: 'c', name: 'Oeil de chat' },
    { id: 'd', name: 'Pépite' },
  ],
  '3': [
    { id: 'e', name: 'Nintendo' },
    { id: 'f', name: 'Mega Drive' },
  ],
};

export default function CategoryScreen(): JSX.Element {
  const { category } = useLocalSearchParams<{ category: string }>();

  console.log(`Category parameter received: ${category}`);

  const products = PRODUCTS[category] || [];
  console.log(`Products for category ${category}:`, products);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produits</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log(`Rendering product item: ${item.name} with ID: ${item.id}`);
          return (
            <Link href={{ pathname: '/products/[productId]', params: { productId: item.id } }} style={styles.button}>
              <Text>{item.name}</Text>
            </Link>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { fontSize: 18, color: 'blue', marginVertical: 10 },
});