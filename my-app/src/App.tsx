import React from 'react';
import ToDoList from './components/ToDoList';

//Here we have app and it is specifiying a type of React.FC or React.FunctionComponent
//This is saying that what we store in app has to be a function but a function that qualifies as a function component in react. 
// This is a function component because it is a function that returns JSX
const App: React.FC = () => {
  //Here we store our list of to dos with an id and text for each in an object within an array.
  const toDos = [{id: 't1', text: 'Finish the course'}]

  return (
    <div className="App">
      <ToDoList toDos={toDos} />
    </div>
  );
}

export default App;
