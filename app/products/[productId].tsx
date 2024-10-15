import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PRODUCT_DETAILS } from '../../data/productDetails';

export default function ProductDetailScreen(): JSX.Element {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const product = PRODUCT_DETAILS[productId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <FlatList
        data={product.imageUrls}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.image} />
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
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});