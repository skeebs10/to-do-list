import React, { useState } from 'react';

export default function Todo(props) {
	return (
		<li key={props.id} className="task-list">
			{props.name}
		</li>
	);
}
