import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function Detail({navigation}: any) {
    const selectedBike = useSelector((state) => state.bike.selectedBike);

    if (!selectedBike) {
        return <Text>No bike selected</Text>;
    }

    return (
        <View style={styles.container}>

            <Image source={selectedBike.image} style={styles.image} />
            <Text style={styles.name}>{selectedBike.name}</Text>
            <Text style={styles.discount}>15% OFF | $350</Text>
            <Text style={styles.originalPrice}>${selectedBike.price}</Text>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>
            It is a very important form of writing as we write almost everything in paragraphs, be it an    answer, essay, story, emails, etc.
            </Text>
           
            <TouchableOpacity style={styles.addToCartButton} 
              onPress={() => navigation.navigate("Init", { image: selectedBike.image })}
              >
                <Text style={styles.addToCartText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        margin: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    discount: {
        fontSize: 16,
        color: '#e91e63',
        marginBottom: 2,
    },
    originalPrice: {
        fontSize: 16,
        color: '#888',
        textDecorationLine: 'line-through',
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: 10,
        marginBottom: 4,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
    },
    addToCartButton: {
        backgroundColor: 'orange',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 40,
        alignItems: 'center',
    },
    addToCartText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});