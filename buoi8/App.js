// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
// import {createStore} from 'redux';

// export default function Home({ route, navigation }: any) {

//   const data =[
//     {
//       "id": 1,
//       "title": "Cooking",
//       "complete": true
//     },
//     {
//       "id": 2,
//       "title": "Have breafast",
//       "complete": false
//     },
//     {
//       "id": 3,
//       "title": "heyy",
//       "complete": true
//     },
//     {
//       "id": 4,
//       "title": "do housework",
//       "complete": false
//     }
//   ];

//   type Todo = {
//     id: number;
//     title: string;
//     completed: boolean;
//   };

//   const [todos, setTodos] = useState<Todo[]>(data);
//   const [jobInput, setJobInput] = useState('');

//   //add
//   const addTodo = (job: string) => {
//     if(job === ''){return;}
//     const newTodoItem = {
//       id: todos[todos.length-1].id + 1,
//       title: job,
//       completed: false,
//     };

//     try {
//       setTodos((prevTodos) => [...prevTodos, newTodoItem]);
//       // setFilteredTodos((prevTodos) => [...prevTodos, response.data]);
//       setJobInput('');
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   //update
//   const updateTodo = (id: number, job: string) => {
//     if(job === ''){return;}
//     const updateItem = {
//       id: todos[todos.length-1].id + 1,
//       title: job,
//       completed: false,
//     };

//     try {
//      setTodos(todos.map((todo) => 
//         todo.id === id ? { ...todo, ...updateItem } : todo
//       ));
//       setJobInput('');
//     } catch (error) {
//       console.error('Error update todo:', error);
//     }
//   };

//    //Delete
//    const deleteTodo = (id: number) => {
//     try {
//       setTodos(todos.filter(todo => todo.id !== id));
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   const RenderItem = ({ id, title, completed }: Todo) => (
//     <View style={styles.item}>
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity>
//           <Image source={require("./img/tickIcon.png")}/>
//         </TouchableOpacity>
//         <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 7 }}>{title}</Text>
//       </View>
//       <View>
//       <TouchableOpacity onPress={() => updateTodo(id, jobInput)}>
//         <Image style={{ tintColor: 'red' }} source={require("./img/editIcon.png")}/>
//       </TouchableOpacity>
//        <TouchableOpacity onPress={() => deleteTodo(id)}>
//         <Text style={{color: 'red', borderWidth: 1, backgroundColor: 'gray', fontWeight: 'bold'}}>Xóa</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Image source={require("./img/back.png")}/>
//           </TouchableOpacity>
//           <View style={{ flexDirection: 'row' }}>
//             <Image
//               source={require("./img/Avatar.png")}
//               style={{
//                 width: 40,
//                 height: 40,
//                 borderRadius: 20,
//                 marginRight: 10,
//               }}
//             />
//             <View>
//               <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Hi</Text>
//               <Text style={{ color: 'gray' }}>Have a great day ahead</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.containerInput}>
//           <Image source={require('./img/searchIcon.png')}/>
//           <TextInput 
//             style={{
//               fontSize: 20,
//               paddingLeft: 5,
//               width: '100%',
//               height: '100%',
//               color: 'gray'
//             }} 
//             keyboardType="default" 
//             placeholder='input job'
//             value={jobInput}
//             onChangeText={(text) => setJobInput(text)}
//           />
//         </View>

//         <View style={{ marginTop: 50 }}>
//           <FlatList
//             data={todos}
//             renderItem={({ item }: any) => (
//               <RenderItem id={item.id} title={item.title} completed={item.completed}/>
//             )}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         </View>

//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <TouchableOpacity 
//               style={{
//                 backgroundColor: '#08bcd4', 
//                 width: 100,
//                 height: 100,
//                 borderRadius: 60,
//                 justifyContent: 'center', 
//                 alignItems: 'center'
//               }}
//               onPress={() => addTodo(jobInput)}
//             >
//             <Text style={{ fontSize: 60, textAlign: 'center', color: 'white' }}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//      marginTop: 60,
//     paddingHorizontal: 20,
//   },
//   containerInput:{
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     height: 40,
//     padding: 5
//   },
//   item:{
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#e5e8ea',
//     height: 40,
//     padding: 10,
//     borderRadius: 20,
//     marginBottom: 20
//   },
// });

// redux
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './js/store'; // Adjust the path as needed
// import Home from './js/Home'; // Import your Home component

// const App = () => (
//   <Provider store={store}>
//     <Home />
//   </Provider>
// );

// export default App;


// redux_toolkit
import React from 'react';
import { Provider } from 'react-redux';
import store from './js/toolkit_store'; // Adjust the path as needed
import Home from './js/toolkit_Home'; // Import your Home component

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;


