import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';

// Interface pour définir les props attendues par le composant GameCard
interface GameCardProps {
  name: string;
  image: any;
  onPress: () => void;
}

// Composant GameCard qui affiche une carte de jeu avec les props passées
const GameCard: React.FC<GameCardProps> = ({ name, image, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={image} style={styles.image} />
    <ThemedText style={styles.gameName}>{name}</ThemedText>
  </TouchableOpacity>
);

// Styles du composant GameCard
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  gameName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameCard;