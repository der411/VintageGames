import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

interface ProductDetail {
  name: string;
  description: string;
  imageUrl: string;
}

const PRODUCT_DETAILS: { [key: string]: ProductDetail } = {
  'a': { name: 'Roi Lion', description: 'Pog Roi Lion édition spéciale.', imageUrl: 'https://via.placeholder.com/150' },
  'b': { name: 'Pocahontas', description: 'Pog Pocahontas rare.', imageUrl: 'https://via.placeholder.com/150' },
  'c': { name: 'Oeil de chat', description: 'Bille œil de chat classique.', imageUrl: 'https://via.placeholder.com/150' },
  'd': { name: 'Pépite', description: 'Bille pépite dorée.', imageUrl: 'https://via.placeholder.com/150' },
  'e': { name: 'Nintendo', description: 'Console Nintendo classique.', imageUrl: 'https://via.placeholder.com/150' },
  'f': { name: 'Mega Drive', description: 'Console Mega Drive de SEGA.', imageUrl: 'https://via.placeholder.com/150' },
};

export default function ProductDetailScreen(): JSX.Element {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const product = PRODUCT_DETAILS[productId] || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 150, height: 150, marginBottom: 20 },
  description: { fontSize: 16, textAlign: 'center' },
});
