import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);

		const removeTodo = id => {
			const removeArr = [...todos].filter(todo => todo.id !== id);

			setTodos(removeArr);
		};
	};
	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodo);
	};

	const completeTodo = id => {
		let updatedTodos = todos.map(todos => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
		});
		setTodos(updatedTodos);
	};

	return (
		<div>
			<h1>Today's Agenda</h1>
			<TodoForm on Submit={addTodo} />
			<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
		</div>
	);
}

export default TodoList;
