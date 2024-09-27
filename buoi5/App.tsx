import React from 'react';
import { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './components/PickColor';

const Stack = createNativeStackNavigator();

function Product({ route, navigation }) {
  const [selectedColor, setSelectedColor] = useState('blue');

  useEffect(() => {
    if (route.params?.selectedColor) {
      setSelectedColor(route.params.selectedColor);
    }
  }, [route.params?.selectedColor]);

  const getImageSource = (color: string) => {
    switch (color) {
      case 'silver':
        return require('./assets/silver.png');
      case 'red':
        return require('./assets/red.png');
      case 'black':
        return require('./assets/black.png');
      case 'blue':
        return require('./assets/blue.png');
      default:
        return require('./assets/blue.png');
    }
  };

  return (    
    <View style={styles.container}>
      <View style={styles.productContainer}>
      <Image source={getImageSource(selectedColor)} style={styles.productImg} />
        <Text style={{fontSize: 17}}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

      <View style={styles.rateContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            source={require('./assets/star.png')}
            style={styles.rateImg}
          />
        ))}
        <Text style={{paddingHorizontal: 20}}>(Xem 825 đánh giá)</Text>
      </View>
        
      <View style={styles.priceContainer}>
        <Text style={{fontWeight: "bold", fontSize: 18}}>1.790.000 đ</Text>
        <Text style={{textDecorationLine: 'line-through',
              color: 'gray',
              fontWeight: "bold",
              paddingHorizontal: 20}}>
          1.790.000 đ
        </Text>
      </View>

      <View style={styles.sloganContainer}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 18}}>Ở đâu rẻ hơn hoàn tiền</Text>
      </View>

      <View style={styles.pickColorContainer}>
       <TouchableOpacity style={styles.pickColor} onPress={() => navigation.navigate('Screen2')}>
          <Text style={{textAlign: 'center'}}>4 MÀU-CHỌN MÀU</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickColorContainer}>
       <TouchableOpacity style={styles.btnMua}>
          <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Chi tiết sản phẩm</Text>
      <Text style={{ marginTop: 20 }}>Đây là trang chi tiết sản phẩm</Text>
    </View>
  );
}

// Ứng dụng chính với NavigationContainer và Stack
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={Product} options={{ title: 'Sản phẩm' }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Chọn màu' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  productContainer: {
    flex: 8,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  productImg:{
    height: 450,
    width: 360,
  },

  rateContainer:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 25
  },
  rateImg:{
    height: 30,
    width: 30,
  },

  priceContainer: {
    flex: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 25
  },
  
  sloganContainer: {
    flex: 0.5,
    paddingHorizontal: 27
  },

  pickColorContainer: {
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  pickColor:{
    height: 40,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    shadowRadius: 5,
    justifyContent: 'center'
  },

  btnMua: {
    backgroundColor: 'red',
    height: 50,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center'
  }
  
});
