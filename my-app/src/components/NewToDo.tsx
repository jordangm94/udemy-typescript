import React from 'react';

const NewToDo: React.FC = () => {
	return (
		<form>
			<div>
				<label htmlFor="todo-text">Todo Text</label>
				<input type="text" id="todo-text"></input>
			</div>
			<button type="submit">ADD TO DO</button>
		</form>
	);
};

export default NewToDo;
