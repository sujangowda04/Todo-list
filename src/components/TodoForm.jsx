import React, { useState, useEffect } from "react";


const TodoForm = ({ addTodo, editTodo, updateTodo }) => {

 const [input, setInput] = useState("");

 useEffect(() => {

  if (editTodo) {

   setInput(editTodo.text);

  }

 }, [editTodo]);

 const handleSubmit = (e) => {

  e.preventDefault();

  if (editTodo) {

   updateTodo(input);

  } else {

   addTodo(input);

  }

  setInput("");

 };

 return (

  <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-3">

   <input

    type="text"

    className="form-control w-50 me-2"

    placeholder="Enter a todo"

    value={input}

    onChange={(e) => setInput(e.target.value)}

   />

   <button type="submit" className="btn btn-primary">

    {editTodo ? "Update" : "Add"}

   </button>

  </form>

 );

};

export default TodoForm;
