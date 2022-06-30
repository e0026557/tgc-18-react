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
		expenseBeingEdited: {}
	};

	// Functions
	// Render all expenses
	renderExpenses = () => {
		return this.state.expenses.map((expense) => {
			return (
				// Render an instance of expense
				<React.Fragment key={expense._id}>
					{/* Check if the expense is being edit or not */}
					{this.state.expenseBeingEdited._id !== expense._id
						? this.displayExpense(expense)
						: this.displayEditExpense(expense)}
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
				</ul>
			</div>
		);
	};

	// EVENT HANDLERS
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

	render() {
		return <React.Fragment>{this.renderExpenses()}</React.Fragment>;
	}
}
