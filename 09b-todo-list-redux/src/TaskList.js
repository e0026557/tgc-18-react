import React from 'react';
import Task from './components/Task';

export default class TaskList extends React.Component {
	state = {
		tasks: [
			{
				_id: 1,
				description: 'wash the car',
				done: false
			},
			{
				_id: 2,
				description: 'wash the toilet',
				done: false
			},
			{
				_id: 3,
				description: 'pay bills',
				done: false
			}
		],
		newTaskDescription: ''
	};

	updateFormField = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addTask = () => {
		// Create a new task
		let newTask = {
			_id: Math.floor(Math.random() * 100000 + 1),
			description: this.state.newTaskDescription,
			done: false
		};

		// Add new task to the back of state array
		// 1. clone the array
		// 2. push the new task to the cloned array
		// 3. update state array
		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
	};

	render() {
		return (
			<React.Fragment>
				<h1>Task List</h1>
				<ul className='list-group'>
					{this.state.tasks.map((task) => (
						<Task task={task} key={task._id} />
					))}
				</ul>

				<h2 className='mt-3'>Add New Task</h2>
				<div>
					<label>Description:</label>
					<input
						type='text'
						className='form-control'
						name='newTaskDescription'
						value={this.state.newTaskDescription}
						onChange={this.updateFormField}
					/>
					<button
						className='btn btn-primary btn-sm mt-2'
						onClick={this.addTask}
					>
						Add New Task
					</button>
				</div>
			</React.Fragment>
		);
	}
}
