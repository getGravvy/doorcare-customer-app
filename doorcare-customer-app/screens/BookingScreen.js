import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BookingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Garage Door Service</Text>
      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Phone Number" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Describe the Problem" style={styles.input} multiline />
      <Button title="Submit Request" onPress={() => alert('Booking submitted!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
});
