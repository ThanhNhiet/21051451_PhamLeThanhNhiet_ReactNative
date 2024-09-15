import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Import các màn hình
import FirstScreen from './firstscreen';
import Screen1a from './1a';
import Screen1b from './1b';
import Screen1c from './1c';
import Screen1d from './1d'
import Screen1e from './1e'
import Screen2a from './2a'
import XMeye from './XMeye'
// Tiếp tục import các màn hình khác...

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'FirstScreen':
        return <FirstScreen goBack={() => setCurrentScreen('Home')} />;
      case 'Screen1a':
        return <Screen1a goBack={() => setCurrentScreen('Home')} />;
      case 'Screen1b':
        return <Screen1b goBack={() => setCurrentScreen('Home')} />;
      case 'Screen1c':
        return <Screen1c goBack={() => setCurrentScreen('Home')} />;
      case 'Screen1d':
        return <Screen1d goBack={() => setCurrentScreen('Home')} />;
      case 'Screen1e':
        return <Screen1e goBack={() => setCurrentScreen('Home')} />;
      case 'Screen2a':
        return <Screen2a goBack={() => setCurrentScreen('Home')} />;
      case 'XMeye':
        return <XMeye goBack={() => setCurrentScreen('Home')} />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Go to first screen" onPress={() => setCurrentScreen('FirstScreen')} />
            <Button title="Go to Screen 1a" onPress={() => setCurrentScreen('Screen1a')} />
            <Button title="Go to Screen 1b" onPress={() => setCurrentScreen('Screen1b')} />
            <Button title="Go to Screen 1c" onPress={() => setCurrentScreen('Screen1c')} />
            <Button title="Go to Screen 1d" onPress={() => setCurrentScreen('Screen1d')} />
            <Button title="Go to Screen 1e" onPress={() => setCurrentScreen('Screen1e')} />
            <Button title="Go to Screen 2a" onPress={() => setCurrentScreen('Screen2a')} />
            <Button title="Go to XMeye" onPress={() => setCurrentScreen('XMeye')} />
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
