function Todo(props) {
    function deleteHandler() {
        props.setToDos(props.toDos.filter(el => el.id !== props.toDo.id))
    }

    function completeHandler() {
        props.setToDos(props.toDos.map(item => (
            item.id === props.toDo.id ? {
                ...item,
                completed: !item.completed
            } :
            item
        )))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${props.toDo.completed ? 'completed' : ''}`}>{props.inputText}</li>
            <button className='complete-btn' onClick={completeHandler}><i className='fas fa-check'></i></button>
            <button className='trash-btn' onClick={deleteHandler}><i className='fas fa-trash'></i></button>
        </div>
    )
}

export default Todo;