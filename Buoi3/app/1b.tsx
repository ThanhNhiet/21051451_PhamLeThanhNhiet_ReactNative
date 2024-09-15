import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const Screen1b = ({ goBack }: { goBack: () => void }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerUpdate}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}  // Điều chỉnh offset cho iOS
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Vùng 1 */}
          <View style={styles.area1}>
            <Image source={require('../assets/images/lock.png')} style={styles.area1} />
          </View>

          {/* Vùng 2 */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>FORGET</Text>
            <Text style={styles.title}>PASSWORD</Text>
          </View>

          {/* Vùng 3 */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Provide your account's email which you want to reset your password.
            </Text>
          </View>

          {/* Vùng 4 */}
          <View style={styles.inputContainer}>
            <Image source={require('../assets/images/email.png')} style={styles.icon}></Image>
            <TextInput style={styles.input} placeholder="Email" />
          </View>

          {/* Vùng 5: Các nút */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={goBack}>
              <Text style={styles.buttonText}>Next</Text>
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
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#d8f4f4',
    alignItems: 'center',
  },
  containerUpdate: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  area1: {
    marginTop: 80,
    width: 100,
    height: 100,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 120,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: '#c4c4c4',
  },
  icon: {
    width: 40,
    height: 28,
    marginRight: 10,
  },
  input: {
    width: '90%',
    height: 50,
  },
  buttonContainer: {
    flex: 25,
    marginTop: 40,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
    height: 60,
    marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Screen1b;
