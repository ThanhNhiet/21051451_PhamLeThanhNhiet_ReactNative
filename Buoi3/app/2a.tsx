import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Text, ScrollView, Image } from 'react-native';

const Screen1f = ({ goBack }: { goBack: () => void }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.containerUpdate}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    {/* Tiêu đề */}
                    <View>
                        <Text style={styles.title}>LOGIN</Text>
                    </View>

                    {/* Name input */}
                    <View style={styles.inputContainer}>
                        <TouchableOpacity style={styles.eyeIcon}>
                            <Image source={require('../assets/images/user.png')} style={styles.eyeImage} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder="Name" keyboardType="default" />
                    </View>

                    {/* Password input */}
                    <View style={styles.inputContainer}>
                        <TouchableOpacity style={styles.eyeIcon}>
                            <Image source={require('../assets/images/lock.png')} style={styles.eyeImage} />
                        </TouchableOpacity>
                        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                        <TouchableOpacity style={styles.eyeIcon}>
                            <Image source={require('../assets/images/eye.png')} style={styles.eyeImage} />
                        </TouchableOpacity>
                    </View>

                    {/* Nút đăng nhập */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.loginButton} onPress={goBack}>
                            <Text style={styles.loginButtonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Create account */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={goBack}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 30}}>CREATE ACCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2c301',
        padding: 20,
    },

    containerUpdate: {
        flex: 1,
        justifyContent: 'center',
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 50,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#dcbd3b',
        borderColor: 'white',
        borderWidth: 1,
        width: '100%',
        height: 50,
        marginTop: 40,
    },

    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
    },

    eyeIcon: {
        padding: 10,
    },

    eyeImage: {
        width: 24,
        height: 24,
    },

    loginButton: {
        marginTop: 60,
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 100,
        alignItems: 'center',
        marginBottom: 20,
    },

    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        marginHorizontal: 60,
    },
});

export default Screen1f;
