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
		newTaskName: ''
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
            _id: Math.floor(Math.random() * 1000000 +1),
            description: this.state.newTaskName,
            done: false
        }

        // Step 1: clone the array
        let cloned =  this.state.tasks.slice();

        // Step 2: Modify the cloned array
        cloned.push(newTask);

        // Step 3: Update state with cloned array
        this.setState({
            tasks: cloned
        })
    }

    updateTaskDone = (task) => {
        // Steps to modify object
        // since we are not allowed to mutate the object directly
        // -> Note that 'done' key is duplicated, so the last entry will overwrite all the previous 'done' entry
        let clonedTask = {...task, done: !task.done};

        // Replace an element in the middle of the arrya

        // 1. Find the index of the modified task
        // -> Note: indexOf won't work in here since the element inside the array is not a primitive data type
        let index = this.state.tasks.findIndex(function(t) {
            if (t._id === clonedTask._id) {
                return true;
            }
            else {
                return false;
            }
        })

        // 2. Update array in state
        // -> Remove the element at index and replace it with the new element
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index),
                clonedTask,
                ...this.state.tasks.slice(index+1)
            ]
        })
    }

	render() {
		return (
			<React.Fragment>
				<h1>Todo List</h1>
				{this.state.tasks.map((task) => (
					<React.Fragment key={task._id}>
						<li>
							{task.description}
							<input
								type='checkbox'
								className='form-check-input ms-3'
								checked={task.done}
                                onChange={()=> {
                                    this.updateTaskDone(task);
                                }}
							/>
						</li>
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
					<button className='btn btn-primary mt-2' onClick={this.addNewTask}>Add</button>
				</div>
			</React.Fragment>
		);
	}
}
