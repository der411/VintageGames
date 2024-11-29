import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { PRODUCTS } from '../../data/products';

export default function CategoryScreen(): JSX.Element {
  const router = useRouter();
  const { category } = useLocalSearchParams<{ category: string }>();

  const filteredProducts = PRODUCTS.filter(product => product.categoryId === category);

  return (
    <ImageBackground
      source={require('../../assets/background.png')} // Assurez-vous de remplacer par votre image
      style={styles.background} // Style pour couvrir tout l'écran
    >
      <View style={styles.overlay}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                router.push({ pathname: '/products/[productId]', params: { productId: item.id } })
              }
            >
              <Text style={styles.cardTitle}>{item.name}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <Text style={styles.title}>Produits</Text>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Prend tout l'espace disponible
    resizeMode: 'cover', // L'image couvre tout l'écran
  },
  overlay: {
    flex: 1, // Prend tout l'espace disponible
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optionnel : un voile semi-transparent pour améliorer la lisibilité
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Texte visible sur l'image de fond
  },
  list: {
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
