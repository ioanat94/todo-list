import React, {useState} from 'react';
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState('')
  const [toDos, setToDos] = useState([])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To-Do List</h1>
        <Form inputText={inputText} setInputText={setInputText} toDos={toDos} setToDos={setToDos} />
        <Todolist inputText={inputText} toDos={toDos} setToDos={setToDos} />
      </header>
    </div>
  );
}

export default App;
