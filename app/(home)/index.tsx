import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../../components/GameCard';
import gamesData from '../../data/gamesData.json';
import imageMap from '../../data/imageMap';

// Convertir les chemins d'image en require
const games = gamesData.map(game => ({
  ...game,
  image: imageMap[game.image]
}));

// Composant HomeScreen qui affiche la liste des jeux
const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCard name={item.name} image={item.image} gameId={item.id} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

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
