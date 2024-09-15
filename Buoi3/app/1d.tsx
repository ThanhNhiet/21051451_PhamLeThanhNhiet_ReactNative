import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Text, ScrollView, Image } from 'react-native';

const Screen1d = ({ goBack }: { goBack: () => void }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerUpdate}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Tiêu đề */}
          <Text style={styles.title}>LOGIN</Text>

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

          {/* Nút đăng nhập */}
          <TouchableOpacity style={styles.loginButton} onPress={goBack}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>

          {/* Điều khoản và quên mật khẩu */}
          <Text style={styles.termsText}>When you agree to terms and conditions</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
          <Text style={styles.orLoginWith}>Or login with</Text>

          {/* Logo các phương thức đăng nhập */}
          <View style={styles.logoContainer}>
            <TouchableOpacity style={styles.logo}>
              <Image source={require('../assets/images/Facebook_logo.png')} style={styles.logoImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo}>
              <Image source={require('../assets/images/z-icon.png')} style={styles.logoImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo}>
              <Image source={require('../assets/images/google-logo.png')} style={styles.logoImage} />
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
    backgroundColor: '#e3f7e3',
    padding: 20,
    alignItems: 'center',
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

  loginButton: {
    marginTop: 80,
    backgroundColor: '#b5443b',
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
    marginBottom: 40,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginHorizontal: 60,
  },

  termsText: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },

  forgotPassword: {
    fontSize: 14,
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20,
  },

  orLoginWith: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },

  logoContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 50,
    alignItems: 'flex-end',
    marginBottom: 100,
    marginLeft: 30,
  },

  logo: {
    flex: 1,
    height: 50,
  },

  logoImage: {
    width: 60,
    height: 60,
  },
});

export default Screen1d;
