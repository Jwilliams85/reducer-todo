// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'



 const TodoList = props => {
   
    return (
        <div className="todo-list">
            {props.info.todo.map(todo => {
                 return(   
                    <div 
                    key={todo.id}
                    onClick={()=>{props.toggleItem(todo.id)}}
                    className={`todo${todo.finished ? "finished" : ""}`}>
                <p >{todo.chore}</p>
                </div>  )

             })}
           
        </div>
    )
}
export default TodoList