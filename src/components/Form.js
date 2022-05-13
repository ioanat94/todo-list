function Form(props) {
    function inputTextHandler(event) {
        props.setInputText(event.target.value);
    }

    function submitToDoHandler(event) {
        event.preventDefault()
        props.setToDos([
            ...props.toDos,
            {
                id: Math.random() * 1000,
                text: props.inputText, 
                completed: false
            }
        ])
        props.setInputText('')
    }

    function statusHandler(event) {
        props.setStatus(event.target.value)
    }

    return (
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type='text' className='todo-input' />
            <button onClick={submitToDoHandler} className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;