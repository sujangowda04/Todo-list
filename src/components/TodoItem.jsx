import React from "react";


const TodoItem = ({ todo, index, deleteTodo, editTodo }) => {

 return (

  <li className="list-group-item d-flex justify-content-between align-items-center">

   {todo.text}

   <div>

    <button

     className="btn btn-sm btn-warning me-2"

     onClick={() => editTodo(index)}

    >

     Edit

    </button>

    <button

     className="btn btn-sm btn-danger"

     onClick={() => deleteTodo(index)}

    >

     Delete

    </button>

   </div>

  </li>

 );

};

export default TodoItem;
