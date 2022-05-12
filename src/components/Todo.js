function Todo(props) {
    return (
        <div className='todo'>
            <li className='todo-item'>{props.inputText}</li>
            <button className='complete-btn'><i className='fas fa-check'></i></button>
            <button className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    )
}

export default Todo;