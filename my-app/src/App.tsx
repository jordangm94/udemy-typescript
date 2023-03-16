import React from 'react';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';

//Here we have app and it is specifiying a type of React.FC or React.FunctionComponent
//This is saying that what we store in app has to be a function but a function that qualifies as a function component in react (So we are indicating the type that the React APP is to receive)
// This is a function component because it is a function that returns JSX
const App: React.FC = () => {
	//Here we store our list of to dos with an id and text for each in an object within an array.
	const toDos = [{ id: 't1', text: 'Finish the course' }];

	return (
		<div className="App">
			{/* Here we pass our toDos to the ToDoList component */}
			<NewToDo />
			<ToDoList toDos={toDos} />
		</div>
	);
};

export default App;
