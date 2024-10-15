import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

interface Category {
  id: string;
  name: string;
}

const CATEGORIES: Category[] = [
  { id: '1', name: 'Pogs' },
  { id: '2', name: 'Billes' },
  { id: '3', name: 'Consoles' },
];

export default function HomeScreen(): JSX.Element {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faites votre choix</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              router.push({ pathname: '/categories/[category]', params: { category: item.id } })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
