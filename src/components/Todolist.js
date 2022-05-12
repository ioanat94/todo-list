import Todo from './Todo';

function Todolist(props) {
    const todos = props.toDos.map(toDo => (
        <Todo key={toDo.id} inputText={toDo.text} toDos={props.toDos} setToDos={props.setToDos} toDo={toDo} />
    ))

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos}
            </ul>
        </div>
    )
}

export default Todolist;