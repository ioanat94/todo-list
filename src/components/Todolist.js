import Todo from './Todo';

function Todolist(props) {
    const todos = props.toDos.map(toDo => (
        <Todo key={toDo.id} inputText={toDo.text} />
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