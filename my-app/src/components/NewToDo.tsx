import React, { useRef } from 'react';

//In this component we create a variable to called textInputRef that is going to hold a reference to a particular HTML element.
//We target the HTML element by using ref={textInputRef}
//We then use a function to handle the submission of the form, and we retrieve the text entered in the form by using our textInputRef.current.value

//Here we declare the new props that the NewToDo component is going to receive using an interface. Here we are passing it onAddToDo function, which will return nothing hence void. Notice, here we must state again what this function will receive as an argument and the type, even though we already did it in app.tsx

interface NewToDoProps {
	onAddToDo: (toDoText: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null); //Here we are saying what type of element the ref will be used in. State null here as component read before html
	//Want this function to fire whenever form is submitted so we will bind it to the form element

	//Notice how even in this function we need to declare the type of event the function is going to recevie
	const toDoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault(); //This prevent real request from going to server as we want to handle request only here in JS.
		const enteredText = textInputRef.current!.value;
		//Add excalamation point so typescript doesn't complain that we object may not be loaded. Excalamtion tells typescript to carry forward, value won't be unknown we know what we are doing it'll be safe!
		props.onAddToDo(enteredText); //Fire onAddToDo function here!
	};
	return (
		<form onSubmit={toDoSubmitHandler}>
			<div>
				<label htmlFor="todo-text">Todo Text</label>
				<input type="text" id="todo-text" ref={textInputRef}></input>
			</div>
			<button type="submit">ADD TO DO</button>
		</form>
	);
};

export default NewToDo;
