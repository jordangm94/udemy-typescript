import React from "react";

//This is the To Do List functional component.

interface ToDoListProps {
    toDos: {id: string, text: string}[];
}

const ToDoList: React.FC<ToDoListProps> = props => {

    return <ul>
        {props.toDos.map(todo => <li key={todo.id}>{todo.text}</li>)}


    </ul>
}

export default ToDoList;