import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import GameCard from '../../components/GameCard';
import gamesData from '../../data/gamesData.json';
import imageMap from '../../data/imageMap';
import { ROUTES } from '../../constants/routes';

// Convertir les chemins d'image en require
const games = gamesData.map(game => ({
  ...game,
  image: imageMap[game.image]
}));

const HomeScreen = () => {
  const router = useRouter();

  const handlePogsPress = () => {
    router.push(ROUTES.POGS as any);
  };

  return (
    <View style={styles.container}>
      <Button title="Pogs" onPress={handlePogsPress} />
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