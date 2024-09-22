import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Import các màn hình
import Screen1 from './tiki_ok';
import Screen2 from './2_c';
// Tiếp tục import các màn hình khác...

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'tiki_ok':
        return <Screen1 goBack={() => setCurrentScreen('Home')} />;
      case '2_c':
        return <Screen2 goBack={() => setCurrentScreen('Home')} />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Go to Screen tiki_ok" onPress={() => setCurrentScreen('tiki_ok')} />
            <Button title="Go to Screen 2_c" onPress={() => setCurrentScreen('2_c')} />
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
  },
});

