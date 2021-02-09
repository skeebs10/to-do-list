import React, { useState } from 'react';

export default function Form(props) {
	const [task, updateTask] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		props.addTask(task);
		updateTask('');
	};

	const handleChange = e => {
		updateTask(e.target.value);
	};

	return (
		<form>
			<div>
				<label htmlFor="new-task">Add Task</label>
			</div>

			<input
				type="text"
				id="new-task"
				name="text"
				value={task}
				onChange={handleChange}
			/>

			<button type="submit" onClick={handleSubmit}>
				Add Task
			</button>
		</form>
	);
}
