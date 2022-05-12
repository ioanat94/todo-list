import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className='App'>
      <header className='App--header'>
        <h1>To-Do List</h1>
        <Form />
        <Todolist />
      </header>
    </div>
  );
}

export default App;
