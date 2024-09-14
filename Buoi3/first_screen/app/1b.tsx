// 1a.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen1b = ({ goBack }: { goBack: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Screen 1a</Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default Screen1b;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});
