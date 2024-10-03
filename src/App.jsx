import { useState } from 'react'
import './App.css'
import InputField from './Components/Inputfield'
import TodoList from './Components/TodoList'

function App() {
  let [todos, setTodos] = useState([])
  const addList = (inputText) => {
    setTodos([...todos, inputText])
  }

  const deletItem = (key) => {
    let newTodo = [...todos]
    newTodo.splice(key, 1)
    setTodos(newTodo)
  }
  return (
    <div className="main">
      <h1>Todo App</h1>
      <InputField addList={addList} />
      {
        todos.map((listItem, i) => {
          return (
            <TodoList key={i} index={i} items={listItem} deletItem={deletItem} />
          )
        })
      }

    </div>
  )
}

export default App
