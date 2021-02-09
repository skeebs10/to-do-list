import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
	return (
		<div className="todo-app">
			<h1>Tasks for the Day</h1>
			<TodoList />
		</div>
	);
}
