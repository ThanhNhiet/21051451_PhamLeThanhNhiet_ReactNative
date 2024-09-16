import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Text, ScrollView, Image } from 'react-native';

const Screen1e = ({ goBack }: { goBack: () => void }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.containerUpdate}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    {/* Tiêu đề */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.title}>REGISTER</Text>
                    </View>

                    {/* Name input */}
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Name" keyboardType="default" />
                    </View>

                    {/* Phone input */}
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
                    </View>

                    {/* Email input */}
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
                    </View>

                    {/* Password input */}
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
                        <TouchableOpacity style={styles.eyeIcon}>
                            <Image source={require('../assets/images/eye.png')} style={styles.eyeImage} />
                        </TouchableOpacity>
                    </View>

                    {/* birthday input */}
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Birthday" keyboardType="default" />
                    </View>

                    {/* radio input */}
                    <View style={styles.radioContainer}>
                        <TouchableOpacity style={styles.option}></TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>Nam</Text>
                        <TouchableOpacity style={styles.option}></TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>Nữ</Text>
                    </View>

                    {/* Nút đăng nhập */}
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={styles.loginButton} onPress={goBack}>
                            <Text style={styles.loginButtonText}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.termsText}>When you agree to terms and conditions</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f7e3',
        width: '100%',
        height: '100%',
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
        marginTop: 50,
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#d5e8d4',
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

    radioContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        height: 50,
        marginTop: 40,
    },

    option: {
        padding: 10,
        width: 20,
        height: 20,
        borderRadius: 14,
        borderWidth: 2,
        marginHorizontal: 10,
    },

    loginButton: {
        marginTop: 10,
        backgroundColor: '#b5443b',
        paddingVertical: 15,
        paddingHorizontal: 100,
        alignItems: 'center',
        marginBottom: 20,
    },

    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 60,
        width: '100%',
        textAlign: 'center'
    },

    termsText: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
});

export default Screen1e;
