import AddIcon from './icons/AddIcon'

const InputData = (props)=> {
   function handleOnsubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget.todo.value);
    const text = event.currentTarget.todo.value;
    props.setState(text);
    event.currentTarget.todo.value = '';
    
  }
      return (
      <form onSubmit={handleOnsubmit} className='form'>
       <input type='text' name='todo' className='input' placeholder='Enter your task here'/>
       <button type='submit' className='addBtn'><AddIcon/></button>
      </form>
    )
  }

export default InputData
