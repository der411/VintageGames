import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GameCard from '../../components/GameCard';
import { ThemedText } from '../../components/ThemedText';
import gamesData from '../data/gamesData.json'; // Importer les données JSON
import imageMap from '../data/imageMap'; // Importer le mappage d'images

// Convertir les chemins d'image en require
const games = gamesData.map(game => ({
  ...game,
  image: imageMap[game.image]
}));

// Composant HomeScreen qui affiche la liste des jeux
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ThemedText style={styles.title}>VintageGames</ThemedText>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCard 
            name={item.name} 
            image={item.image} 
            onPress={() => console.log(`${item.name} pressed`)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

// Styles du composant HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});