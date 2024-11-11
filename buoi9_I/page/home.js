import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { selectBike } from '../redux/bikeSlice';

const bikes = [
    { id: '1', name: 'Pinarello', price: 1800, type: 'Roadbike', image: require('../img/bikeblue.png') },
    { id: '2', name: 'Pina Mountain', price: 1700, type: 'Mountain', image: require('../img/pinaMoutain.png') },
    { id: '3', name: 'Pina Bike', price: 1500, type: 'Roadbike', image: require('../img/bikeblue.png') },
    { id: '4', name: 'Pinarello', price: 1900, type: 'Mountain', image: require('../img/pinaMoutain.png') },
    { id: '5', name: 'Pinarello', price: 2700, type: 'Roadbike', image: require('../img/bikeblue.png') },
    { id: '6', name: 'Pinarello', price: 1350, type: 'Mountain', image: require('../img/pinaMoutain.png') },
];

const categories = ['All', 'Roadbike', 'Mountain'];

const Stack = createNativeStackNavigator();
export default function Home({navigation}: any) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const dispatch = useDispatch();

    const filteredBikes = selectedCategory === 'All' ? bikes : bikes.filter(bike => bike.type === selectedCategory);

    const handlePress = (bike) => {
        dispatch(selectBike(bike));
        navigation.navigate('Detail');
    };

    const renderBikeItem = ({ item }) => (
        <View style={styles.bikeCard}>
            <TouchableOpacity onPress={() => handlePress(item)}>
                <Image source={item.image} style={styles.bikeImage} />
                <Text style={styles.bikeName}>{item.name}</Text>
                <Text style={styles.bikePrice}>${item.price}</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.header}>The world's Best Bike</Text>
            <View style={styles.categoryContainer}>
                {categories.map(category => (
                    <TouchableOpacity
                        key={category}
                        onPress={() => setSelectedCategory(category)}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category && styles.selectedCategoryButton
                        ]}
                    >
                        <Text style={[
                            styles.categoryText,
                            selectedCategory === category && styles.selectedCategoryText
                        ]}>
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <FlatList
                data={filteredBikes}
                renderItem={renderBikeItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.bikeList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#e91e63',
        textAlign: 'center',
        marginBottom: 16,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
    },
    selectedCategoryButton: {
        backgroundColor: '#e91e63',
    },
    categoryText: {
        color: '#333',
        fontSize: 14,
    },
    selectedCategoryText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    bikeList: {
        alignItems: 'center',
    },
    bikeCard: {
        width: '45%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    bikeImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    bikeName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bikePrice: {
        fontSize: 14,
        color: '#888',
    },
});
