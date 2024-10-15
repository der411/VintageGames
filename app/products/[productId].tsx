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
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 100, // La moitié de la largeur et de la hauteur pour obtenir un cercle
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
});