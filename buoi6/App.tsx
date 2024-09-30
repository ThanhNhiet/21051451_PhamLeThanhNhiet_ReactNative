import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Screen1 from './pages/product';
import Screen2 from './pages/dayCap';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'product':
        return <Screen1 goBack={() => setCurrentScreen('Home')} />;
      case 'daycap':
        return <Screen2 goBack={() => setCurrentScreen('Home')} />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Product" onPress={() => setCurrentScreen('product')} />
            <Button title="daycap" onPress={() => setCurrentScreen('daycap')} />
          </View>
        );
    }
  };
  
  return <View style={styles.container}>{renderScreen()}</View>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
  },
});

