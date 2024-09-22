import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, } from 'react-native';

const pwGeneScreen = ({ goBack }: { goBack: () => void }) => {
  const [checkedLow, setCheckLow] = useState(false);
  const [checkedUp, setCheckUp] = useState(false);
  const [checkedNum, setCheckNum] = useState(false);
  const [checkedSym, setCheckSym] = useState(false);
  const [pwLength, setPwLength] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let availableCharTypes = []; // Mảng chứa các loại ký tự được chọn
    let guaranteedChars = [];    // Mảng chứa các ký tự đảm bảo có mặt

    if (checkedLow) {
      availableCharTypes.push('lower');
      guaranteedChars.push(lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]);
    }
    if (checkedUp) {
      availableCharTypes.push('upper');
      guaranteedChars.push(upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]);
    }
    if (checkedNum) {
      availableCharTypes.push('number');
      guaranteedChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (checkedSym) {
      availableCharTypes.push('symbol');
      guaranteedChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    let password = guaranteedChars.join('');

    for (let i = guaranteedChars.length; i < parseInt(pwLength); i++) {
      let randomTypeIndex = Math.floor(Math.random() * availableCharTypes.length);
      let selectedType = availableCharTypes[randomTypeIndex];

      if (selectedType === 'lower') {
        let randomIndex = Math.floor(Math.random() * lowerCaseChars.length);
        password += lowerCaseChars[randomIndex];
      } else if (selectedType === 'upper') {
        let randomIndex = Math.floor(Math.random() * upperCaseChars.length);
        password += upperCaseChars[randomIndex];
      } else if (selectedType === 'number') {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        password += numbers[randomIndex];
      } else if (selectedType === 'symbol') {
        let randomIndex = Math.floor(Math.random() * symbols.length);
        password += symbols[randomIndex];
      }
    }

    setGeneratedPassword(password);
  };

  return(
    <View style={styles.container}>
      <View style={styles.containerMain}>

        {/*title*/}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText} onPress={goBack}>PASSWORD</Text>
          <Text style={styles.titleText}>GENERATOR</Text>
        </View>

        {/*input*/}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputField} keyboardType="default" placeholder="" 
            editable={false} value={generatedPassword}/>
        </View>

        {/*generate*/}
        <View style={styles.generateContainer}>
          <View style={styles.generateItems}>
            <Text style={styles.generateText}>Password length: </Text>
            <TextInput style={styles.pwLength} keyboardType='default' placeholder=""
              value={pwLength} onChangeText={setPwLength} />
          </View>

          <View style={styles.generateItems}>
            <Text style={styles.generateText}>Include lower case letter: </Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setCheckLow(!checkedLow)}>
              <View style={styles.checkbox}>
                {checkedLow && <View style={styles.checked} />}
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.generateItems}>
            <Text style={styles.generateText}>Include upcase letter: </Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setCheckUp(!checkedUp)}>
              <View style={styles.checkbox}>
                {checkedUp && <View style={styles.checked} />}
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.generateItems}>
            <Text style={styles.generateText}>Include numberr: </Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setCheckNum(!checkedNum)}>
              <View style={styles.checkbox}>
                {checkedNum && <View style={styles.checked} />}
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.generateItems}>
            <Text style={styles.generateText}>Include special sympol: </Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setCheckSym(!checkedSym)}>
              <View style={styles.checkbox}>
                {checkedSym && <View style={styles.checked} />}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/*button*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={generatePassword}>
              <Text style={styles.textButton}>GENERATE PASSORD</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#9494be',
  },
  containerMain: {
    marginTop: 20,
    flex: 1,
    margin: 20,
    backgroundColor: '#23235b',
    borderRadius: 30,
    shadowRadius: 10
  },

  /*Title*/
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },

  /*input*/
  inputContainer:{
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  inputField: {
    backgroundColor: '#151537',
    height: 50,
    color: 'white',
    fontSize: 25
  },

  /*genrate*/
  generateContainer: {
    flex: 5,
    justifyContent: 'flex-start'
  },
  generateItems: {
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  generateText:{
    flex: 1,
    alignContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#000',
  },
  pwLength: {
    backgroundColor: 'white',
    color: 'black',
    width: 100,
    height: 30,
    alignContent: 'center',
  },

  /*button*/
  buttonContainer:{
    flex: 1,
    alignItems: 'center',
    marginBottom: 20
  },
  button:{
    backgroundColor: '#3b3b98',
    width: '70%',
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default pwGeneScreen;