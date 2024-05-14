import React, { useState } from "react";


function TodoApp() {
  const [todos, setTodos] = useState([{
    id: 1,
    taskName: "read"
  }, 
  {
    id: 2,
    taskName: "write"
  }]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    console.log(inputValue);
    if (inputValue.trim() !== '') {
      setTodos([...todos, {id: Date.now(), taskName: inputValue}]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  function handleItemUpdate(id) {

  }

  const handleDelete = (id) => {
   const filterdData =  todos.filter(todo => todo.id !== id);
   setTodos(filterdData);
  };

  const handelUpdate = (id) => {
    const UpdateTodos = todos.map(todo => todo.id === handelUpdate.id? handelUpdate : todo );
    setTodos(UpdateTodos);
  }

  return (
    <div className="contenar">
      <h2>ToDo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="button" onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <>
            <li key={index}>{todo.taskName}</li>
            <button className="btn" onClick={() => handleInputChange(todo.id)}><span>{todo.text}</span> Update </button>
            <button className="btm">
              <span role="img" aria-label="delete" onClick={() => handleDelete(todo.id)}>🗑️</span>
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;