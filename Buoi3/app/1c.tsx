import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const Screen1c = ({ goBack }: { goBack: () => void }) => {
  // Tạo mảng chứa giá trị của 6 TextInput
  const code = ['', '', '', '', '', ''];

  // Hàm xử lý khi thay đổi ký tự
  const handleChangeText = (value: string, index: number, inputs: any) => {
    code[index] = value;

    // Tự động chuyển sang ô tiếp theo nếu có ký tự
    if (value.length === 1 && index < 5) {
      inputs[index + 1].focus();
    }

    // Quay lại ô trước nếu xóa ký tự
    if (value.length === 0 && index > 0) {
      inputs[index - 1].focus();
    }
  };

  // Tạo mảng ref cho các TextInput
  let inputs: any[] = [];
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerUpdate}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {/* Vùng 1*/}
        <View style={styles.area1} >
          <Text style={styles.area1Text}>CODE</Text>
        </View>

        {/* Vùng 2 */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>VERIFICATION</Text>
        </View>

        {/* Vùng 3*/}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Enter ontime password sent on ++849092605798
          </Text>
        </View>

        {/* Vùng 3*/}
        <View style={styles.inputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handleChangeText(value, index, inputs)}
              textAlign="center"
              ref={(input) => inputs[index] = input} // Lưu reference vào mảng
            />
          ))}
        </View>

        {/* Vùng 5: Các nút */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={goBack}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>

        {/* Thêm View với màu nền xanh cho phần còn lại */}
        {/* <View style={styles.bottomSection}>
                </View> */}
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
    width: '100%',
    height: '100%'
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

  area1: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 50,
    width: 200,
    height: 100,
  },

  area1Text: {
    fontSize: 75,
    fontWeight: 'bold',
    color: 'black',
  },

  titleContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  descriptionContainer: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  description: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    fontSize: 24,
    paddingHorizontal: 15,
  },

  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 20,
    width: '100%'
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
    height: 60,
    // marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  // bottomSection: {
  //   flex: 1,
  //   width: '100%',
  //   backgroundColor: '#90e4f4',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default Screen1c;
