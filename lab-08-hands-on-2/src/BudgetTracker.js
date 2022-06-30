import React from 'react';

export default class BudgetTracker extends React.Component {
	state = {
		expenses: [
			{
				_id: 1,
				date: '01-01-2010',
				description: 'water bill',
				category: 'bill',
				amount: 100,
				reconciled: false
			},
			{
				_id: 2,
				date: '02-02-2020',
				description: 'taxi fare',
				category: 'transport',
				amount: 30,
				reconciled: false
			},
			{
				_id: 3,
				date: '03-03-2030',
				description: 'chicken rice',
				category: 'food',
				amount: 5,
				reconciled: false
			}
		],
		expenseBeingEdited: {},
		expenseBeingDeleted: {},
		newExpenseDate: '',
		newExpenseDescription: '',
		newExpenseCategory: 'transport',
		newExpenseAmount: 0,
		newExpenseReconciled: false,
		modifiedExpenseDate: '',
		modifiedExpenseDescription: '',
		modifiedExpenseCategory: 'transport',
		modifiedExpenseAmount: 0,
		modifiedExpenseReconciled: false
	};

	// Functions
	// Render all expenses
	renderExpenses = () => {
		return this.state.expenses.map((expense) => {
			return (
				// Render an instance of expense
				<React.Fragment key={expense._id}>
					{/* Check if the expense is being edited or deleted or none */}
					{/* Note: This is a self-calling arrow function to implement an if-else statement */}
					{(() => {
						if (this.state.expenseBeingEdited._id === expense._id) {
							return this.displayEditExpense(expense);
						} else if (
							this.state.expenseBeingDeleted._id === expense._id
						) {
							return this.displayDeleteExpense(expense);
						} else {
							return this.displayExpense(expense);
						}
					})()}
				</React.Fragment>
			);
		});
	};

	// Display an instance of expense
	displayExpense = (expense) => {
		return (
			<div className='container mt-3 border'>
				<div className='mt-2'>Date: {expense.date}</div>
				<div className='mt-2'>Description: {expense.description}</div>
				<div className='mt-2'>Category: {expense.category}</div>
				<div className='mt-2'>Amount: ${expense.amount}</div>
				<div className='mt-2'>Reconciled: {expense.reconciled ? "true" : "false"}</div>
				<div className='mt-2'>
					<button
						className='btn btn-sm btn-primary me-2'
						onClick={() => {
							this.beginEditExpense(expense);
						}}
					>
						Edit
					</button>
					<button
						className='btn btn-sm btn-danger'
						onClick={() => {
							this.setState({
								expenseBeingDeleted: expense
							});
						}}
					>
						Delete
					</button>
				</div>
			</div>
		);
	};

	displayEditExpense = (expense) => {
		return (
			<div className='container mt-3 border'>
				<div className="mt-2">
					<label>Date:</label>
					<input
						className="form-control"
						type='text'
						name='modifiedExpenseDate'
						value={this.state.modifiedExpenseDate}
						onChange={this.updateFormField}
					/>
				</div>
				<div className="mt-2">
					<label>Description:</label>
					<input
						className="form-control"
						type='text'
						name='modifiedExpenseDescription'
						value={this.state.modifiedExpenseDescription}
						onChange={this.updateFormField}
					/>
				</div>
				<div className="mt-2">
					<label>Category:</label>
					<select
						name='modifiedExpenseCategory'
						className='form-select'
						value={this.state.modifiedExpenseCategory}
						onChange={this.updateFormField}
					>
						<option value='transport'>Transport</option>
						<option value='entertainment'>Entertainment</option>
						<option value='food'>Food</option>
						<option value='bill'>Bill</option>
						<option value='loan'>Loan</option>
						<option value='others'>Others</option>
					</select>
				</div>
				<div className="mt-2">
					<label>Amount:</label>
					<input
						className="form-control"
						type='text'
						name='modifiedExpenseAmount'
						value={this.state.modifiedExpenseAmount}
						onChange={this.updateFormField}
					/>
				</div>
				<div className="mt-2">
					<label
						htmlFor={expense._id}
						className='form-check-label'
					>
						Reconciled?
					</label>
					<input
						type='checkbox'
						name='modifiedExpenseReconciled'
						id={expense._id}
						className='form-check-input ms-1'
						checked={this.state.modifiedExpenseReconciled}
						onChange={this.updateFormField}
					/>
				</div>
				<div className="mt-2">
					<button
						className='btn btn-sm btn-primary'
						onClick={this.updateExpense}
					>
						Update
					</button>
				</div>
			</div>
		);
	};

	displayDeleteExpense = (expense) => {
		return (
			<div className="container mt-3 border">
				<p>
					Are you sure you want to delete this expense?
				</p>
				<p>
					({expense.description})
				</p>
				<button onClick={()=> {
					this.deleteExpense(expense) 
				}} className="btn btn-danger btn-sm me-2">Confirm Delete</button>
				<button onClick={()=> {
					this.setState({
						expenseBeingDeleted: {}
					})
				}} className="btn btn-primary btn-sm">Cancel</button>
			</div>
		)
	}

	renderAddExpense = () => {
		return (
			<React.Fragment>
				<div className='container mt-3'>
					<h3>Add new expense</h3>

					<div className='mt-2'>
						<label className='form-label'>Date:</label>
						<input
							type='text'
							name='newExpenseDate'
							className='form-control'
							value={this.state.newExpenseDate}
							onChange={this.updateFormField}
						/>
					</div>

					<div className='mt-2'>
						<label className='form-label'>Description:</label>
						<input
							type='text'
							name='newExpenseDescription'
							className='form-control'
							value={this.newExpenseDescription}
							onChange={this.updateFormField}
						/>
					</div>

					<div className='mt-2'>
						<label className='form-label'>Category:</label>
						<select
							name='newExpenseCategory'
							className='form-select'
							value={this.state.newExpenseCategory}
							onChange={this.updateFormField}
						>
							<option value='transport'>Transport</option>
							<option value='entertainment'>Entertainment</option>
							<option value='food'>Food</option>
							<option value='bill'>Bill</option>
							<option value='loan'>Loan</option>
							<option value='others'>Others</option>
						</select>
					</div>

					<div className='mt-2'>
						<label className='form-label'>Amount:</label>
						<input
							type='text'
							name='newExpenseAmount'
							className='form-control'
							value={this.newExpenseAmount}
							onChange={this.updateFormField}
						/>
					</div>

					<div className='mt-2'>
						<label className='form-check-label'>Reconciled?</label>
						<input
							type='checkbox'
							name='newExpenseReconciled'
							className='form-check-input ms-1'
							checked={this.state.newExpenseReconciled}
							onChange={this.updateFormField}
						/>
					</div>

					<button
						className='btn btn-primary mt-4'
						onClick={this.addExpense}
					>
						Add expense
					</button>
				</div>
			</React.Fragment>
		);
	};

	addExpense = () => {
		// Get new expense
		let newExpense = {
			_id: Math.floor(Math.random() * 100000 + 1),
			date: this.state.newExpenseDate,
			description: this.state.newExpenseDescription,
			category: this.state.newExpenseCategory,
			amount: this.state.newExpenseAmount,
			reconciled: this.state.newExpenseReconciled
		};

		// Update the array in state with a new copy
		this.setState({
			expenses: [...this.state.expenses, newExpense]
		});
	};

	beginEditExpense = (expense) => {
		this.setState({
			expenseBeingEdited: expense,
			modifiedExpenseDate: expense.date,
			modifiedExpenseDescription: expense.description,
			modifiedExpenseCategory: expense.category,
			modifiedExpenseAmount: expense.amount,
			modifiedExpenseReconciled: expense.reconciled
		});
	};

	updateExpense = () => {
		// Clone expense to be modified and overwrite the keys with the modified values 
		const modifiedExpense = {
			...this.state.expenseBeingEdited,
			date: this.state.modifiedExpenseDate,
			description: this.state.modifiedExpenseDescription,
			category: this.state.modifiedExpenseCategory,
			amount: this.state.modifiedExpenseAmount,
			reconciled: this.state.modifiedExpenseReconciled
		};

		// Find the index of the expense to be modified
		const index = this.state.expenses.findIndex(expense => expense._id === modifiedExpense._id);

		// Update the array in state via substitution method
		this.setState({
			expenses: [
				...this.state.expenses.slice(0, index),
				modifiedExpense,
				...this.state.expenses.slice(index + 1)
			],
			expenseBeingEdited: {}
		});
	}

	deleteExpense = (expense) => {
		// Get the index of expense to be deleted
		const index = this.state.expenses.findIndex( e => e._id === expense._id );

		if (index === -1) {
			return;
		}

		// Update the array in state using the exclusion method
		this.setState({
			expenses: [
				...this.state.expenses.slice(0, index),
				...this.state.expenses.slice(index+1)
			],
			expenseBeingDeleted: {}
		});
	}

	// EVENT HANDLERS
	updateFormField = (event) => {
		if (event.target.type !== 'checkbox') {
			this.setState({
				[event.target.name]: event.target.value
			});
		} else {
			this.setState({
				[event.target.name]: event.target.checked
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				{this.renderExpenses()}
				{this.renderAddExpense()}
			</React.Fragment>
		);
	}
}
