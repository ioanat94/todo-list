import Todo from './Todo';

function Todolist(props) {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                <Todo />
            </ul>
        </div>
    )
}

export default Todolist;