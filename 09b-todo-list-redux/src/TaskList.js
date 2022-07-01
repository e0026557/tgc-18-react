import React from 'react';
import AddNewTask from './components/AddNewTask';
import EditTask from './components/EditTask';
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
		newTaskDescription: '',
		taskBeingEdited: {
			_id: 0
		},
		modifiedTaskDescription: ''
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

	updateTaskDone = (task) => {
		const modifiedTask = {
			...task,
			done: !task.done
		};

		// Get index of the task to be modified
		const index = this.state.tasks.findIndex((t) => t._id === task._id);

		this.setState({
			tasks: [
				...this.state.tasks.slice(0, index),
				modifiedTask,
				...this.state.tasks.slice(index + 1)
			]
		});
	};

	beginEdit = (task) => {
		this.setState({
			taskBeingEdited: task,
			modifiedTaskDescription: task.description
		});
	};

	processUpdate = () => {
		const modifiedTask = {
			...this.state.taskBeingEdited,
			description: this.state.modifiedTaskDescription
		};

		// Get index of task to be modified
		const index = this.state.tasks.findIndex(
			(t) => t._id === modifiedTask._id
		);

		// Clone the array
		const cloned = this.state.tasks.slice();

		// Replace the element at index with the modified task in the cloned array
		cloned.splice(index, 1, modifiedTask);

		this.setState({
			tasks: cloned,
			taskBeingEdited: {}
		});
	};

	render() {
		return (
			<React.Fragment>
				<h1>Task List</h1>
				<ul className='list-group'>
					{this.state.tasks.map((task) => {
						if (this.state.taskBeingEdited._id !== task._id) {
							return (
								<Task
									task={task}
									key={task._id}
									updateTaskDone={this.updateTaskDone}
									beginEdit={this.beginEdit}
								/>
							);
						} else {
							return (
								<EditTask
									key={task._id}
									modifiedTaskDescription={
										this.state.modifiedTaskDescription
									}
									updateFormField={this.updateFormField}
									processUpdate={this.processUpdate}
								/>
							);
						}
					})}
				</ul>

				<AddNewTask
					newTaskDescription={this.state.newTaskDescription}
					updateFormField={this.updateFormField}
					addTask={this.addTask}
				/>
			</React.Fragment>
		);
	}
}
