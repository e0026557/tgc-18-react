import React from 'react';

export default class TaskList extends React.Component {
	state = {
		tasks: [
			{
				_id: 1,
				description: 'walk the dog',
				done: false
			},
			{
				_id: 2,
				description: 'water the plant',
				done: false
			},
			{
				_id: 3,
				description: 'pay the bill',
				done: false
			}
		],
		newTaskName: '',
		taskBeingEdited: null, // alternatively, we can store the _id key of the task that we want to edit
		modifiedTaskName: ''
	};

	// EVENT HANDLERS
	updateFormField = (event) => {
		// event.target will contain the element that the event happened on
		// event.target.value will contain the value of the target element
		// event.target.name should contain the name of the key that we want to modify in the state variable
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addNewTask = () => {
		let newTask = {
			_id: Math.floor(Math.random() * 1000000 + 1),
			description: this.state.newTaskName,
			done: false
		};

		// Step 1: clone the array
		let cloned = this.state.tasks.slice();

		// Step 2: Modify the cloned array
		cloned.push(newTask);

		// Step 3: Update state with cloned array
		this.setState({
			tasks: cloned
		});
	};

	updateTaskDone = (task) => {
		// Steps to modify object
		// since we are not allowed to mutate the object directly
		// -> Note that 'done' key is duplicated, so the last entry will overwrite all the previous 'done' entry
		let clonedTask = { ...task, done: !task.done };

		// Replace an element in the middle of the arrya

		// 1. Find the index of the modified task
		// -> Note: indexOf won't work in here since the element inside the array is not a primitive data type
		let index = this.state.tasks.findIndex(function (t) {
			if (t._id === clonedTask._id) {
				return true;
			} else {
				return false;
			}
		});

		// 2. Update array in state
		// -> Remove the element at index and replace it with the new element
		this.setState({
			tasks: [
				...this.state.tasks.slice(0, index),
				clonedTask,
				...this.state.tasks.slice(index + 1)
			]
		});
	};

	// Alternatively, we can put this inside the onClick proxy function instead of declaring a named function
	beginEditTask = (task) => {
		this.setState({
			taskBeingEdited: task, // Remember which task is being edited
			modifiedTaskName: task.description // Store the description of the task that is being edited for 2-way binding
		});
	};

	displayTask = (task) => {
		return (
			<li className='mt-3'>
				{task.description}
				<input
					type='checkbox'
					className='form-check-input ms-3'
					checked={task.done}
					onChange={() => {
						this.updateTaskDone(task);
					}}
				/>

				<button
					className='btn btn-primary btn-sm ms-3'
					onClick={() => {
						this.beginEditTask(task);
					}}
				>
					Edit
				</button>

				<button
					className='btn btn-danger btn-sm ms-3'
					onClick={() => {
						this.deleteTask(task);
					}}
				>
					Delete
				</button>
			</li>
		);
	};

	displayEditTask = (task) => {
		return (
			<li className='mt-3'>
				<input
					name='modifiedTaskName'
					type='text'
					value={this.state.modifiedTaskName}
					onChange={this.updateFormField}
				/>
				<button
					className='btn btn-primary btn-sm ms-3'
					onClick={this.updateTask}
				>
					Update
				</button>
			</li>
		);
	};

	updateTask = () => {
		const modifiedTask = {
			...this.state.taskBeingEdited,
			description: this.state.modifiedTaskName
		};

		// update in the middle of an array
		// 0. find the index of the task object that we want to modify
		// -> Note: we cannot use indexOf in this case because indexOf can only be used for an array of primitive data types (in this case we have an array of objects)
		// -> findIndex takes in a predicate function that will get the index of the element where the predicate function returns true
		let index = this.state.tasks.findIndex(
			(task) => task._id === modifiedTask._id
		);

		// 1. clone the existing array
		let cloned = this.state.tasks.slice();

		// 2. modify the cloned array
		cloned.splice(index, 1, modifiedTask); // splice and replace the spliced element

		// 3. replace the original array in the state with the modified one
		this.setState({
			tasks: cloned,
			taskBeingEdited: null // Remember to tell the state variable that we are done with editing and not editing the task anymore
		});
	};

	deleteTask = (task) => {
		// Get the index of the task to be deleted
		let index = this.state.tasks.findIndex( t => t._id === task._id);

		// Remove from the middle technique
		const cloned = [
			...this.state.tasks.slice(0, index),
			...this.state.tasks.slice(index + 1)
		];

		// Update the state variable with the cloned array
		this.setState({
			tasks: cloned
		})
	}

	render() {
		return (
			<React.Fragment>
				<h1>Todo List</h1>
				{this.state.tasks.map((task) => (
					<React.Fragment key={task._id}>
						{this.state.taskBeingEdited === null ||
						this.state.taskBeingEdited._id !== task._id
							? this.displayTask(task)
							: this.displayEditTask(task)}
					</React.Fragment>
				))}
				<h2 className='mt-3'>Add a new task</h2>
				<div>
					<label>Task name:</label>
					<input
						name='newTaskName'
						type='text'
						className='form-control'
						value={this.state.newTaskName}
						onChange={this.updateFormField}
					/>
					<button
						className='btn btn-primary mt-2'
						onClick={this.addNewTask}
					>
						Add
					</button>
				</div>
			</React.Fragment>
		);
	}
}
