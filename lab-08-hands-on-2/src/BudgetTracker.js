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
				<ul>
					<li>Date: {expense.date}</li>
					<li>Description: {expense.description}</li>
					<li>Category: {expense.category}</li>
					<li>Amount: ${expense.amount}</li>
					<li>
						<label
							htmlFor={expense._id}
							className='form-check-label'
						>
							Reconciled?
						</label>
						<input
							type='checkbox'
							name='reconciled'
							id={expense._id}
							className='form-check-input ms-1'
							checked={expense.reconciled}
							onChange={() => {
								this.updateCheckbox(expense);
							}}
						/>
					</li>
					<li>
						<button
							className='btn btn-sm btn-primary'
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
					</li>
				</ul>
			</div>
		);
	};

	displayEditExpense = (expense) => {
		return (
			<div className='container mt-3 border'>
				<ul>
					<li>
						<label>Date:</label>
						<input
							type='text'
							name='modifiedExpenseDate'
							value={this.state.modifiedExpenseDate}
							onChange={this.updateFormField}
						/>
					</li>
					<li>
						<label>Description:</label>
						<input
							type='text'
							name='modifiedExpenseDescription'
							value={this.state.modifiedExpenseDescription}
							onChange={this.updateFormField}
						/>
					</li>
					<li>
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
					</li>
					<li>
						<label>Amount:</label>
						<input
							type='text'
							name='modifiedExpenseAmount'
							value={this.state.modifiedExpenseAmount}
							onChange={this.updateFormField}
						/>
					</li>
					<li>
						<label
							htmlFor={expense._id}
							className='form-check-label'
						>
							Reconciled?
						</label>
						<input
							type='checkbox'
							name='reconciled'
							id={expense._id}
							className='form-check-input ms-1'
							checked={modifiedExpenseReconciled}
							onChange={() => {
								this.updateCheckbox(expense);
							}}
						/>
					</li>
					<li>
						<button
							className='btn btn-sm btn-primary'
							onClick={this.updateExpense}
						>
							Update
						</button>
					</li>
				</ul>
			</div>
		);
	};

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

	updateCheckbox = (expense) => {
		// Create a copy of the expense object and overwrite the reconciled key with the new boolean value
		const expenseCopy = {
			...expense,
			reconciled: !expense.reconciled
		};

		// Find the index of the expense object
		// Note: use findIndex since it is an array of objects (elements are not primitive data types)
		const index = this.state.expenses.findIndex(
			(expense) => expense._id === expenseCopy._id
		);

		// Replace the object with the copied object in the array (via substitution)
		this.setState({
			expenses: [
				...this.state.expenses.slice(0, index),
				expenseCopy,
				...this.state.expenses.slice(index + 1)
			]
		});
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
