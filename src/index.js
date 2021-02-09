import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const app = document.getElementById('app');

////from the README Assignment
const toDoListData = [
	{ id: 'todo0', name: 'Learn more about React', completed: true },
	{ id: 'todo1', name: 'Write a new Component', completed: false },
	{ id: 'todo2', name: 'Add some style', completed: false }
];

ReactDOM.render(<App toDos={toDoListData} />, app);
