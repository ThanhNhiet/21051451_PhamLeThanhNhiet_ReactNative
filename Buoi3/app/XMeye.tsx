import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';

const XMeye = ({ goBack }: { goBack: () => void }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerUpdate}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
         
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Image
              source={require('../assets/images/eye_riel.png')}
              style={{ width: 150, height: 150 }}
            />
          </View>

          {/* Name input */}
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require('../assets/images/userClean.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Please input user name"
              keyboardType="default"
            />
          </View>

          {/* Password input */}
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require('../assets/images/lockClean.png')}
                style={styles.iconlock}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Please input password"
              secureTextEntry
            />
          </View>

          {/* Nút đăng nhập */}
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.loginButton} onPress={goBack}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          {/* Register và Forgot Password */}
          <View style={styles.registerForgotContainer}>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.linkText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goBack}>
              <Text style={styles.linkText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          {/* Đường kẻ ngang */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>Other Login Methods</Text>
            <View style={styles.divider} />
          </View>

          {/* Phương thức đăng nhập khác */}
          <View style={styles.methodContainer}>
            <TouchableOpacity style={styles.method}>
              <Image
                source={require('../assets/images/addfriend.png')}
                style={styles.methodIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.method}>
              <Image
                source={require('../assets/images/wifi.png')}
                style={styles.methodIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.method}>
              <Image
                source={require('../assets/images/Facebook_logo.png')}
                style={styles.methodIcon}
              />
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
    backgroundColor: '#f2f2f2',
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    paddingLeft: 10,
    marginTop: 10,
  },

  iconContainer: {
    padding: 5,
  },

  icon: {
    width: 27,
    height: 30,
  },
  iconlock: {
    width: 27,
    height: 32,
  },

  loginButton: {
    marginTop: 60,
    backgroundColor: '#386ffc',
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  registerForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },

  linkText: {
    fontSize: 16,
    fontWeight: '500',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'blue',
  },

  dividerText: {
    marginHorizontal: 10,
    fontSize: 18,
    
  },

  methodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },

  method: {
    alignItems: 'center',
    padding: 10,
  },

  methodIcon: {
    width: 70,
    height: 70,
  },
});

export default XMeye;
