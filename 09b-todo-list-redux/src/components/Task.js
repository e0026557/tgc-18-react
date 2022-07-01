import React from 'react';

// Note: we can pass an object as props
// -> child components can communicate with parent components via functions passed to child components as props
export default function Task(props) {
	return (
		<React.Fragment>
			<li className='list-group-item'>
				<label className='form-check-label me-2'>
					{props.task.description}
				</label>
				<input
					type='checkbox'
					className='form-check-input'
					checked={props.task.done}
					onChange={() => props.updateTaskDone(props.task)}
				/>
				<button
					className='btn btn-primary btn-sm mx-2'
					onClick={() => props.beginEdit(props.task)}
				>
					Edit
				</button>
				<button
					className='btn btn-danger btn-sm mx-2'
					onClick={() => props.delete(props.task)}
				>
					Delete
				</button>
			</li>
		</React.Fragment>
	);
}
