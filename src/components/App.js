import React, { useState } from 'react';
import Todo from './ToDo';
import Form from './Form';

export default function App(props) {
	const [tasks, setTasks] = useState(props.tasks);

	const addInput = input => {
		const newInput = { id: 'id', name: input, completed: false };
		setTasks([...tasks, newInput]);
	};

	const taskList = tasks.map(task => (
		<ToDo
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
		/>
	));

	return (
		<div className="page-wrapper">
			<h1 className="page-title">Today's Tasks!</h1>
			<Form addInput={addInput} />
			<div className="container">
				<h2>Tasks:</h2>
				<ul className="list">{taskList}</ul>
			</div>
		</div>
	);
}
