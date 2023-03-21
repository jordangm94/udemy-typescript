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

	//This deletehandler will allow us to delete a to do if needed

	//Here we use prev to dos function to load all of the to dos in the current ToDos state and call .filter on it
	//Filter will allow us to go through each todo object and check if the id doesn't match the id that is passed to toDoDeleteHandler then keep that in the array of prevToDos...but if it does match then don't include it in array

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
