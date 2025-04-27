import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DoorCare!</Text>
      <Button title="Book a Service" onPress={() => navigation.navigate('Book Service')} />
      <Button title="My Loyalty Rewards" onPress={() => navigation.navigate('Loyalty Rewards')} />
      <Button title="My Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
});
