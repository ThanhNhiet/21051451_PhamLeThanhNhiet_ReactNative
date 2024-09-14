import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Import các màn hình
import FirstScreen from './firstscreen';
import Screen1b from './1a';
import Screen1c from './1b';
// Tiếp tục import các màn hình khác...

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'FirstScreen':
        return <FirstScreen goBack={() => setCurrentScreen('Home')} />;
      case 'Screen1a':
        return <Screen1b goBack={() => setCurrentScreen('Home')} />;
      case 'Screen1b':
        return <Screen1c goBack={() => setCurrentScreen('Home')} />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Go to first screen" onPress={() => setCurrentScreen('FirstScreen')} />
            <Button title="Go to Screen 1a" onPress={() => setCurrentScreen('Screen1a')} />
            <Button title="Go to Screen 1b" onPress={() => setCurrentScreen('Screen1b')} />
            {/* Tiếp tục thêm các nút cho các màn hình khác */}
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
    marginBottom: 20,
  },
});
