import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  function handleChange(event) {
    setInputValue(event.target.value)
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    const newTodos = [ ... todos, { title: inputValue} ]
    setTodos(newTodos)

    setInputValue('')
  }



  return (
  <div className="formWrapper">
      <h1> To-do List </h1>
      <form onSubmit={ handleSubmit }> 
        <input value={ inputValue } onChange={ handleChange } onSubmit={ handleSubmit }/> 
      </form>
      <div className="list">
        { todos.map((item, index) => {

          const { title } = item

          return (
            <h4 key={index}>
              {title}
            </h4>
          )
        })}
      </div>
  </div>);
}

export default App;

// Title
// Sub-title
// List
// User Input
