import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
state = {
  todos: [
    {
      id: 1,
      title: 'Code a little',
      completed: false
    },
    {
      id: 2,
      title: 'Code a little',
      completed: false
    },
    {
      id: 3,
      title: 'Code a little',
      completed: false
    }
  ]
}

  return (
    <div className="App">
      <header className="App-header">
        
        
          <Todos />
       
       
        
      </header>
    </div>
  );
}

export default App;
