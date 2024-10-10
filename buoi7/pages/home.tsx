import React from 'react';
import { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const Stack = createNativeStackNavigator();
export default function Home({ route, navigation }: any) {
  const Api = "http://localhost:3000/posts";
  // const Api = "http://192.168.101.7:3000/posts";
  type Todo = {
    id: string;
    title: string;
    completed: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (route.params?.name) {
      setName(route.params.name);
    }
  }, [route.params?.name]);

   useEffect(() => {
    if (route.params?.job) {
      addTodo(route.params.job);
    }
  }, [route.params?.job]);

  useEffect(() => {
    if (route.params?.id && route.params?.jobUpdate) {
      updateTodo(route.params.id, route.params.jobUpdate)
    }
  }, [route.params?.id, route.params?.jobUpdate]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(Api);
        setTodos(response.data);
        setFilteredTodos(response.data); // Khởi tạo danh sách todo đã lọc
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, []);

  //add
  const addTodo = async (job: string) => {
    if(job === ''){return;}
    const newTodoItem = {
      title: job,
      completed: false,
    };

    try {
      const response = await axios.post(Api, newTodoItem);
      setTodos((prevTodos) => [...prevTodos, response.data]);
      setFilteredTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  //edit
  const updateTodo = async (id: string, jobUpdate: string) => {
    if(jobUpdate === ''){return;}
    const updatedTodo = {
      title: jobUpdate, // New title
    };

    try {
      await axios.patch(Api+`/${id}`, updatedTodo);
      setTodos(todos.map((todo) => 
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ));
      setFilteredTodos(todos.map((todo) => 
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  //Delete
  //  const deleteTodo = async (id: string) => {
  //   try {
  //     await axios.delete(Api+`/${id}`);
  //     setTodos(todos.filter(todo => todo.id !== id));
  //     setFilteredTodos(todos.filter(todo => todo.id !== id));
  //   } catch (error) {
  //     console.error('Error deleting todo:', error);
  //   }
  // };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      const filteredData = todos.filter(todo => todo.title.toLowerCase().includes(text.toLowerCase()));
      setFilteredTodos(filteredData);
    } else {
      setFilteredTodos(todos); // Hiển thị tất cả khi không có từ khóa tìm kiếm
    }
  };

  const RenderItem = ({ id, title, completed }: Todo) => (
    <View style={styles.item}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image source={require("../img/tickIcon.png")}/>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 7 }}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("CRUD", {id, name})}>
        <Image style={{ tintColor: 'red' }} source={require("../img/editIcon.png")}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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

        <View style={styles.containerInput}>
          <Image source={require('../img/searchIcon.png')}/>
          <TextInput 
            style={{
              fontSize: 20,
              paddingLeft: 5,
              width: '100%',
              height: '100%',
              color: 'gray'
            }} 
            keyboardType="default" 
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        <View style={{ marginTop: 50 }}>
          <FlatList
            data={filteredTodos} // Sử dụng danh sách đã lọc
            renderItem={({ item }: any) => (
              <RenderItem id={item.id} title={item.title} completed={item.completed}/>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity 
              style={{
                backgroundColor: '#08bcd4', 
                width: 100,
                height: 100,
                borderRadius: 60,
                justifyContent: 'center', 
                alignItems: 'center'
              }}
              onPress={() => {navigation.navigate("CRUD", {name})}}
            >
            <Text style={{ fontSize: 60, textAlign: 'center', color: 'white' }}>+</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    padding: 5
  },
  item:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e8ea',
    height: 40,
    padding: 10,
    borderRadius: 20,
    marginBottom: 20
  },
});
