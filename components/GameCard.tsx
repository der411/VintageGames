import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app/navigationTypes';
import { router } from 'expo-router';

type GameCardNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface GameCardProps {
  name: string;
  image: any;
  gameId: string;
}

const GameCard: React.FC<GameCardProps> = ({ name, image, gameId }) => {
  const navigation = useNavigation<GameCardNavigationProp>();

  const handlePress = () => {
    router.push(`/(home)/details?gameId=${gameId}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <ThemedText style={styles.gameName}>{name}</ThemedText>
    </TouchableOpacity>
  );
};

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