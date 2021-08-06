import React, { useState } from 'react';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('')

  const list = []



  function handleChange(event) {
    setInputValue(event.target.value)
    
  }

  function handleSubmit(event) {
    event.preventDefault()
    list.push(inputValue)
    setInputValue('')
    console.log(list)
  }



  return (
  <div className="formWrapper">
      <h1> To-do List </h1>
      <form onSubmit={ handleSubmit }> 
        <input value={ inputValue } onChange={ handleChange } onSubmit={ handleSubmit }/> 
      </form>
      <div className="list">
        { list.map(item => {

          console.log(item)

          return (
            <h4>
              {item}
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
