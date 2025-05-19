import React from "react";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, editTodo }) => {

 return (

  <ul className="list-group w-75 mx-auto">

   {todos.map((todo, index) => (

    <TodoItem

     key={index}

     todo={todo}

     index={index}

     deleteTodo={deleteTodo}

     editTodo={editTodo}

    />

   ))}

  </ul>

 );

};

export default TodoList;
