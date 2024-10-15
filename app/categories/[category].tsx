import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { PRODUCTS } from '../../data/products';

export default function CategoryScreen(): JSX.Element {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category: string }>();

  const filteredProducts = PRODUCTS.filter(product => product.categoryId === category);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produits</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              router.push({ pathname: '/products/[productId]', params: { productId: item.id } })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});