import React from 'react'

const Todo = props => {
    console.log("item",props)
    return (
        <div 
        className={
            `item${props.item.finished ? 'finished' : ''}`}
            onClick={()=> props.toggleItem(props.item.id)}
            >
            <p>{props.item.chore}</p>
        </div>
    )
}

export default Todo