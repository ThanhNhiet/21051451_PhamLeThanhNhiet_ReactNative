import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Screen1a = ({ goBack }: { goBack: () => void }) => {
    return (
        <TouchableWithoutFeedback onPress={goBack}>
            <View style={styles.container}>
                {/* Vùng 1: Hình tròn */}
                <View style={styles.circle} ></View>

                {/* Vùng 2: Tiêu đề */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>GROW</Text>
                    <Text style={styles.title}>YOUR BUSINESS</Text>
                </View>

                {/* Vùng 3: Mô tả */}
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                        We will help you to grow your business using online server
                    </Text>
                </View>

                {/* Vùng 4: Các nút */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

                {/* Vùng 5 */}
                <View style={styles.howweWorkContainer}>
                    <Text style={styles.howweWork}>HOW WE WORK</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8f4f4',
        alignItems: 'center',
    },

    circle: {
        marginTop: 80,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 10,
    },

    titleContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },

    descriptionContainer: {
        alignItems: 'center',
    },
    description: {
        marginTop: 100,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },

    buttonContainer: {
        marginTop: 100,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        borderRadius: 10,
        width: 130,
        height: 50,
        marginHorizontal: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    howweWorkContainer: {
        marginTop: 50,
    },
    howweWork: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Screen1a;