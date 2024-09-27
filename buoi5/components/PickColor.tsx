import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function PickColor() {

  const [selectedColor, setSelectedColor] = useState('blue'); // Mặc định là 'blue'
  const navigation = useNavigation();

  const getImageSource = (color: string) => {
    switch (color) {
      case 'silver':
        return require('../assets/silver.png');
      case 'red':
        return require('../assets/red.png');
      case 'black':
        return require('../assets/black.png');
      case 'blue':
        return require('../assets/blue.png');
      default:
        return require('../assets/blue.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerN}>
        <Image source={getImageSource(selectedColor)} style={styles.productImg} />
        <View>
          <Text style={{fontWeight: 'bold'}}>Điện thoại Vsmart Joy 3</Text>
          <Text style={{fontWeight: 'bold'}}>Hàng chính hãng</Text>
        </View>
      </View>

      <View style={styles.containerS}>
        <View>
          <Text style={{padding: 20, fontSize: 16}}>Chọn 1 màu bên dưới:</Text>
        </View>
        

        <TouchableOpacity style={{
          marginBottom: 10,
          width: 80,
          height: 80,
          backgroundColor: 'white',
          shadowRadius: 10
        }}
          onPress={() => setSelectedColor('silver')}
        >
        </TouchableOpacity>

         <TouchableOpacity style={{
          marginBottom: 10,
          width: 80,
          height: 80,
          backgroundColor: 'red',
          shadowRadius: 10
        }}
          onPress={() => setSelectedColor('red')}
        >
        </TouchableOpacity>

         <TouchableOpacity style={{
          marginBottom: 10,
          width: 80,
          height: 80,
          backgroundColor: 'black',
          shadowRadius: 10
        }}
          onPress={() => setSelectedColor('black')}
        >
        </TouchableOpacity>

         <TouchableOpacity style={{
          marginBottom: 10,
          width: 80,
          height: 80,
          backgroundColor: 'blue',
          shadowRadius: 10
        }}
          onPress={() => setSelectedColor('blue')}
        >
        </TouchableOpacity>

         <TouchableOpacity style={{
          marginBottom: 10,
          marginTop: 50,
          paddingHorizontal: 120,
          height: 50,
          backgroundColor: '#4d6dc1',
          shadowRadius: 10,
          justifyContent: 'center'
        }}
         onPress={() => navigation.navigate('Product', { selectedColor })}
        >
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>XONG</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerN:{
    flex: 2,
    flexDirection: 'row',
  },
  containerS:{
    flex: 7,
    backgroundColor: '#c4c4c4',
    alignItems: 'center'
  },

  productImg:{
    height: 130,
    width: 105
  }
});
