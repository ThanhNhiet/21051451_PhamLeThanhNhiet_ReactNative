import React from 'react';
import { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home'
import CRUD from './pages/crudTodo'

const Stack = createNativeStackNavigator();
function Login({navigation}: any) {
  
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={{
            width: 400,
            height: 400,
          }}
          source={require("./img/noteImg.png")}/>
      </View>

      <View style={styles.containerTitle}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: 'blue'
          }}
        >
          MANAGE YOUR TASK
        </Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput style={{
          textAlign: 'center',
          fontSize: 18,
          color: 'gray',
          height: 40,
          width: '90%',
          borderRadius: 20,
          borderWidth: 1
        }} keyboardType='default' placeholder='Enter your name'
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity 
          style={{
            backgroundColor: '#08bcd4',
            height: 50,
            width: 200,
            justifyContent: 'center',
            borderRadius: 30,
          }}
          onPress={() => navigation.navigate('Home', { name })}
        >
          <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="CRUD" component={CRUD} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 90,
  },
  containerImg:{
    flex: 3,
    alignItems: 'center'
  },
  containerTitle:{
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  containerInput:{
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20
  },
  containerButton:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
