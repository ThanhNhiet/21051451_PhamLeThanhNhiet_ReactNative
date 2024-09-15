import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const FirstScreen = ({ goBack }: { goBack: () => void }) => {
  return (
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
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
  },

  circle: {
    marginTop: 40,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
  },

  titleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  descriptionContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  buttonContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'flex-end',
    marginBottom: 50,
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
});

export default FirstScreen;