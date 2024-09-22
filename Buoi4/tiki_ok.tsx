import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';

const CheckoutScreen = ({ goBack }: { goBack: () => void }) => {
   const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(141800);
  const [discount, setDiscount] = useState(0);

   const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const applyDiscount = () => {
    const randomDiscount = Math.floor(Math.random() * 50) + 1; // Random từ 1% đến 50%
    setDiscount(randomDiscount);
  };

  const tamTinh = price * quantity;
  // Tính giá sau khi giảm
  const totalPrice = price * quantity * ((100 - discount) / 100);
  
  const formatCurrency = (value) => {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

    return (
        <ScrollView style={styles.container}>
            {/* Phần hiển thị sản phẩm */}
            <View style={styles.productContainer}>
                <Image source={require('./assets/imgs/toan.png')} style={styles.productImage} />
                <View style={styles.productInfo}>
                    <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={styles.productPrice}>141.800 đ</Text>

                     <Text style={{textDecorationLine: 'line-through'}}>141.800 đ</Text>

                    <View style={styles.inputQuan}>
                      <TouchableOpacity style={styles.tangGiam} onPress={handleDecrease}>
                          <Text>-</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{paddingHorizontal: 8}}>
                          <Text>{quantity}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.tangGiam} onPress={handleIncrease}>
                          <Text>+</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{paddingHorizontal: 90}} onPress={goBack}>
                          <Text style={{color: 'blue'}}>Mua sau</Text>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.maGiamGiaDaLuu}>
                 <Text>Mã giảm giá đã lưu</Text>
                <TouchableOpacity style={{paddingLeft: 20}}>
                    <Text style={{color: 'blue'}}>Xem tại đây</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.discountContainer}>
                 <Text style={styles.maGiamGia}>{discount}%</Text>
                <TouchableOpacity style={styles.applyButton} onPress={applyDiscount}>
                    <Text style={styles.applyButtonText}>Áp dụng</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginBottom: 10, width: '100%', height: 20, backgroundColor: '#c4c4c4'}}>
            </View>

             <View style={styles.maGiamGiaDaLuu}>
                 <Text>Bạn có phiếu Tiki/Got it/urbox?</Text>
                <TouchableOpacity style={{paddingLeft: 20}}>
                    <Text style={{color: 'blue'}}>Nhập tại đây?</Text>
                </TouchableOpacity>
            </View>
      
            <View style={{marginTop: 10, marginBottom: 10, width: '100%', height: 20, backgroundColor: '#c4c4c4'}}>
            </View>

            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Tạm tính</Text>
                <Text style={styles.subtotalPrice}>{formatCurrency(tamTinh)}</Text>
            </View>

             <View style={{marginTop: 5, marginBottom: 10, width: '100%', height: 140, backgroundColor: '#c4c4c4'}}>
            </View>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Thành tiền</Text>
                <Text style={styles.totalPrice}>{formatCurrency(totalPrice)}đ</Text>
            </View>

            {/* Nút đặt hàng */}
            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productContainer: {
      flex: 1, 
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    productImage: {
        width: 100,
        height: 140,
        marginRight: 10,
    },
    productInfo: {
        justifyContent: 'center',
    },
    productTitle: {
      flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    productPrice: {
      flex: 1,
        fontSize: 16,
        color: 'red',
        justifyContent: 'center'
    },
    inputQuan: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    tangGiam: {
      backgroundColor: 'gray',
      paddingTop: 1,
      paddingRight: 6,
      paddingLeft: 6,
      paddingBottom: 1
    },

     maGiamGiaDaLuu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20
    },

    discountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    maGiamGia: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '70%',
        textAlign: 'center'
    },
    applyButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: 10,
        borderRadius: 5,
    },
    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    subtotalText: {
        fontSize: 16,
    },
    subtotalPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
    orderButton: {
        backgroundColor: 'red',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20
    },
    orderButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CheckoutScreen;
