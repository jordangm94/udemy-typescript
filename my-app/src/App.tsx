import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import { Todo } from './todo.model';

//Here we have app and it is specifiying a type of React.FC or React.FunctionComponent
//This is saying that what we store in app has to be a function but a function that qualifies as a function component in react (So we are indicating the type that the React APP is to receive)
// This is a function component because it is a function that returns JSX
const App: React.FC = () => {
	//Here we are creating a state of TODOS and we must declare the types that setToDos will be able to set or receive as an argument.
	// const [toDos, setToDos] = useState<{ id: string; text: string }[]>([]);

	//Here we were able to put ToDo type structure in model file and just import and drop it here, makes it much cleaner than ^
	const [toDos, setToDos] = useState<Todo[]>([]);

	//This function will be responsible for adding to dos. We state the type of the argument it will receive
	const toDoAddHandler = (text: string) => {
		//Within state change, declare function that gets previous to dos, spreads them into array and then we will add latest to do.
		//PrevToDos here acts as the latest state snapshot!
		setToDos((prevToDos) => [
			...prevToDos,
			{ id: Math.random.toString(), text: text }
		]);
	};

	const toDoDeleteHandler = (toDoId: string) => {
		setToDos((prevToDos) => {
			return prevToDos.filter((todo) => todo.id !== toDoId);
		});
	};

	return (
		<div className="App">
			{/* Here we pass our toDos to the ToDoList component */}
			<NewToDo onAddToDo={toDoAddHandler} />
			<ToDoList toDos={toDos} onDeleteToDo={toDoDeleteHandler} />
		</div>
	);
};

export default App;
