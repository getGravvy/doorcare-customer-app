import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoyaltyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loyalty Rewards</Text>
      <Text>You have 120 points!</Text>
      <Button title="Redeem for $10 Discount" onPress={() => alert('Redeemed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
});
