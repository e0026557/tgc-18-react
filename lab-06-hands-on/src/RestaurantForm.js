import React from 'react';

export default class RestaurantForm extends React.Component {
	// Non-state variables

	// State variables
	state = {
		firstName: '',
		lastName: '',
		seating: '',
		smoking: '',
		appetizers: []
	};

	// Functions

	render() {
		return (
			<div>
				<div className='mt-2'>
					<label className='form-label'>First Name:</label>
					<input
						type='text'
						name='firstName'
						className='form-control'
						value={this.state.firstName}
						onChange={this.updateFormField}
					/>
				</div>
			</div>
		);
	}
}
