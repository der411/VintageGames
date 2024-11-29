import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { PRODUCT_DETAILS } from '../../data/productDetails';

export default function ProductDetailScreen(): JSX.Element {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const product = PRODUCT_DETAILS[productId];

  return (
    <ImageBackground
      source={require('../../assets/background2.png')} // Remplacez par votre image
      style={styles.background}
    >
      <View style={styles.overlay}>
        <FlatList
          data={product.imageUrls}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.description}>{product.description}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Permet à l'image de fond de couvrir tout l'écran
    resizeMode: 'contain', // L'image remplit l'écran
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Voile semi-transparent pour améliorer la lisibilité
    padding: 16,
  },
  list: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff', // Texte visible sur le fond sombre
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Texte visible sur le fond sombre
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
});
