import React from 'react';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './page/home'
import Detail from './page/detail' 
const Stack = createNativeStackNavigator();
function Init({navigation, route}: any) {
  const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (route.params?.image) {
            setSelectedImage(route.params.image);
        }
    }, [route.params?.image]);

   return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 30}}>
         <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>A premium online store for sporter and their stylish choice</Text>
      </View>

     <View style={{ backgroundColor: 'pink', marginTop: 20, borderRadius: 50 }}>
                {selectedImage ? (
                    <Image source={selectedImage} style={{ height: 300, width: 300 }} />
                ) : (
                    <Image source={require("./img/bikeblue.png")} style={{ height: 300, width: 300 }} />
                )}
            </View>

      <View style={{marginTop: 20}}>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Power bike shop</Text>
      </View>

      <View style={{marginTop: 40, alignItems: 'center' }}>
        <TouchableOpacity style={{backgroundColor: 'red', borderRadius: 50, paddingHorizontal: 20, height: 50, justifyContent:'center'}} onPress={() => navigation.navigate('Home')}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Init" component={Init} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
