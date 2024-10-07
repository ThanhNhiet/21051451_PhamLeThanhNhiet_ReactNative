import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  // const Api = "https://my-json-server.typicode.com/ThanhNhiet/toDoData/posts";
  const Api = "http://localhost:3000/posts";

  type Todo = {
    id: any;
    title: string;
    completed: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const data = [
    {
      "id": 5,
      "title": "homework",
      "completed": false
    }
  ]
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(Api);
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);


  //reload
  const reload = async () => {
    try {
        const response = await axios.get(Api);
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
  };

  //add
  const addTodo = async () => {
    const newTodoItem = {
      title: "homework",
      completed: false,
    };

    try {
      const response = await axios.post(Api, newTodoItem);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  //Delete
   const deleteTodo = async () => {
     const id = '70ff';
    try {
      await axios.delete(Api+`/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  //update
  const updateTodo = async () => {
  const id = 3; // Example id to update
  const updatedTodo = {
    title: "heyy", // New title
  };

  try {
    await axios.patch(Api+`/${id}`, updatedTodo);
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    ));
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text >{item.id}</Text>
      <Text >{item.title}</Text>
    </View>
  );
  
  return(
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={updateTodo}>
          <Text>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={deleteTodo}>
          <Text>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={reload}>
          <Text>Reload</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.content}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button:{
    backgroundColor: 'gray',
    padding: 20
  },

  content:{
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center'
  },

  item:{
    padding: 5,
    backgroundColor: 'pink',
    marginBottom: 10
  }
});

export default App;
