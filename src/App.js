import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState('')
  const [toDos, setToDos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredToDos, setFilteredToDos] = useState([])

  useEffect(() => {
    getLocalToDos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalToDos()
  }, [toDos, status])

  function filterHandler() {
    switch(status) {
      case 'completed':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === true))
        break
      case 'uncompleted':
        setFilteredToDos(toDos.filter(toDo => toDo.completed === false))
        break
      default:
        setFilteredToDos(toDos)
        break
    }
  }

  function saveLocalToDos() {
    if(localStorage.getItem('toDos') === null) {
      localStorage.setItem('toDos', JSON.stringify([]))
    } else {
      localStorage.setItem('toDos', JSON.stringify(toDos))
    }
  }

  function getLocalToDos() {
    if(localStorage.getItem('toDos') === null) {
      localStorage.setItem('toDos', JSON.stringify([]))
    } else {
      let toDoFromLocal = JSON.parse(localStorage.getItem('toDos'))
      setToDos(toDoFromLocal)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To-Do List</h1>
        <Form inputText={inputText} setInputText={setInputText} toDos={toDos} setToDos={setToDos} setStatus={setStatus} />
        <Todolist inputText={inputText} toDos={toDos} setToDos={setToDos} filteredToDos={filteredToDos} />
      </header>
    </div>
  );
}

export default App;
