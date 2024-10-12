import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import pogsData from '../../data/pogsData.json';
import { ROUTES } from '../../constants/routes';

const PogsScreen = () => {
  const router = useRouter();

  const handlePress = (pogId: string) => {
    router.push({
      pathname:  ROUTES.POG_DETAILS as any,
      params: { id: pogId }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pogsData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item.id)}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  item: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default PogsScreen;