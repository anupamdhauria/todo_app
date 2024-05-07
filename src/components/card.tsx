import {} from 'react'
import { useTodos } from '../context/Todo'
import { useSearchParams } from 'react-router-dom';

const Card=()=>{
    const {todos,toggleAsCompleted,handleTodoListDelete} =useTodos();
    let filterData=todos;
    const [searchParams]=useSearchParams();
    let todoStatus=searchParams.get('todo');
    if (todoStatus==='active'){
        filterData=filterData.filter((task)=>!task.completed);
    }
    if(todoStatus==='completed'){
        filterData=filterData.filter((task)=> task.completed);
    }
    return(
        <ul className="main-task">
            {
                filterData.map((todo)=>{
                    return <li key={todo.id}>
                         <input type="checkbox" id={`todo-${todo.id}`}
                            checked={todo.completed}
                             onChange={()=>toggleAsCompleted(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`} > {todo.task} </label>
                        {
                            todo.completed &&  
                            <button onClick={()=>handleTodoListDelete(todo.id)}type="button">Delete</button>
                        }
                </li>
                })
            }
        </ul>
    )
}
export default Card;