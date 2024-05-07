import { ReactNode,createContext, useState,useContext } from "react";



export type TodoPropsType={
    children:ReactNode;
}

export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}
export type TodoContextType={
    todos:Todo[];
    handleAddToDo:(task:string)=>void;
    toggleAsCompleted:(id:string)=>void;
    handleTodoListDelete:(id:string)=>void;
}
const TodoContext=createContext<TodoContextType|null>(null);

export const TodoProvider=({children}:TodoPropsType)=>{
 
        const[todos,setTodos]=useState<Todo[]>(()=>{
            try {
                const newTodos = localStorage.getItem("todos") || "[]";
                //convert string to array object
                return JSON.parse(newTodos) as Todo[]
            } catch (error) {
                return []
            }
        });

        const handleAddToDo=(task:string)=>{
            setTodos((prevState)=>{
                const newTodo:Todo[]=[
                    {
                        id:Math.random().toString(),
                        task:task,
                        completed:false,
                        createdAt:new Date()
                    },
                    ...prevState
                ]
                // console.log(newTodo)
                //convert array object to string
                localStorage.setItem("todos",JSON.stringify(newTodo));
                return newTodo;
            })
            
        }
        

        //toggle
        const toggleAsCompleted=(id:string)=>{
            setTodos((previousState)=>{
                let newTodo=previousState.map((todo)=>{
                    if(todo.id===id){
                        return {...todo,completed:!todo.completed}
                    }
                    return todo;
                })
                localStorage.setItem("todos",JSON.stringify(newTodo));
               return newTodo; 
            })
        }

        //delete
        const handleTodoListDelete=(id:string)=>{
            setTodos((prev)=>{
                let newTodoList=prev.filter((todo)=>todo.id!=id);
                localStorage.setItem("todos",JSON.stringify(newTodoList));
                return newTodoList;
            })
        }
    
       return <TodoContext.Provider value={{todos,handleAddToDo,toggleAsCompleted,handleTodoListDelete}}>
            {children}
        </TodoContext.Provider>
}


//create custome hooks for using provider

export const useTodos=()=>{
    const todoContext=useContext(TodoContext);
    if(!todoContext){
        throw new Error("useTodos used outside of Provider");   
    }
    return todoContext;
}