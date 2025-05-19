import React, { useState } from "react";

import Header from './components/Header';

import TodoForm from './components/TodoForm';

import TodoList from './components/TodoList';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

 const [todos, setTodos] = useState([]);

 const [editTodo, setEditTodo] = useState(null);

 const addTodo = (text) => {

  if (text.trim() === "") return;

  setTodos([...todos, { text }]);

 };

 const deleteTodo = (index) => {

  const updatedTodos = [...todos];

  updatedTodos.splice(index, 1);

  setTodos(updatedTodos);

 };

 const editTodoHandler = (index) => {

  setEditTodo({ ...todos[index], index });

 };

 const updateTodo = (newText) => {

  const updatedTodos = [...todos];

  updatedTodos[editTodo.index].text = newText;

  setTodos(updatedTodos);

  setEditTodo(null);

 };

 return (

  <div className="container mt-5">

   <h2 className="text-center mb-4">Todo List App</h2>

   <TodoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo} />

   <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodoHandler} />

  </div>

 );

};

export default App;
