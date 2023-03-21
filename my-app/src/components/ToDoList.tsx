import React from 'react';

//Below is our To Do List functional component. However, before going into component, we must state the types of props this component will be receiving.
// We do so using interface: NameOfComponentProps, where we then state the name of the prop being passed and its types

interface ToDoListProps {
	toDos: { id: string; text: string }[];
	onDeleteToDo: (id: string) => void;
}
//We then reference which props we are goign to be receiving in the component by referencing the interface, seen here as React.FC<ToDoListProps>
const ToDoList: React.FC<ToDoListProps> = (props) => {
	return (
		<ul>
			{props.toDos.map((todo) => (
				<li key={todo.id}>
					<span>{todo.text}</span>
					<button onClick={props.onDeleteToDo.bind(null, todo.id)}>
						DELETE
					</button>
				</li>
			))}
		</ul>
	);
};

export default ToDoList;
