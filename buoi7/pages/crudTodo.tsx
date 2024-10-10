import React from 'react';
import { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function CRUD({ route, navigation }: any) {

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const[id, setId] = useState('');
  const[jobUpdate, setJobUpdate] = useState('');
  const[isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (route.params?.name) {
      setName(route.params.name);
    }
  }, [route.params?.name]);

  useEffect(() => {
    if (route.params?.id) {
      setId(route.params.id);
      setIsUpdate(true);
    }
  }, [route.params?.id]);


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require("../img/back.png")}/>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require("../img/Avatar.png")}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hi {name}</Text>
              <Text style={{ color: 'gray' }}>Have a great day ahead</Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 40, marginBottom: 40, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>ADD YOUR JOB</Text>
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../img/noteIcon.png')}/>
          <TextInput 
            style={{
              fontSize: 20,
              paddingLeft: 5,
              width: '100%',
              height: '100%',
              color: 'gray',
              borderWidth: 0
            }} 
            keyboardType="default" 
            placeholder="Input your job"
            value={isUpdate ? jobUpdate : job}
            onChangeText={(text) => {
              if (isUpdate) {
                setJobUpdate(text);
              } else {
                setJob(text);
              }
            }}
            
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity 
              style={{
                backgroundColor: '#08bcd4', 
                height: 60,
                width: 200,
                borderRadius: 20,
                justifyContent: 'center', 
                alignItems: 'center',
                padding: 5
              }}
              onPress={() => {
                if (isUpdate) {
                   navigation.navigate("Home", {id, jobUpdate})
                } else {
                  navigation.navigate("Home", {job})
                }
                setJob('');
                setJobUpdate('');
                setIsUpdate(false);
              }}
            >
            <Text style={{ fontSize: 25, textAlign: 'center', color: 'white' }}>FINISH</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={require('../img/noteImg.png')}/>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 20,
  },
  containerInput:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    padding: 5,
    marginBottom: 60
  },
  containerButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  }
});
