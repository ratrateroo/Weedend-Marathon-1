import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className = "main">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
