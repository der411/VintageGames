import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


export default function GameDetailScreen() {
    const params = useLocalSearchParams();
    const gameId = params.gameId;
  
    // Utilisez gameId comme nécessaire
    return (
      <View>
        <Text>Game ID: {gameId}</Text>
      </View>
    );
  }