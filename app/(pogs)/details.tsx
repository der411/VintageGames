import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import pogsData from '../../data/pogsData.json';

export default function PogDetailScreen() {
  const params = useLocalSearchParams();
  const pogId = params.pogId as string;
  const pog = pogsData.find(p => p.id === pogId);

  if (!pog) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Pog not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{pog.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});