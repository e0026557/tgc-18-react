import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RestaurantForm extends React.Component {
	// Non-state variables
	textInputFields = [
		{
			displayText: 'First Name:',
			value: 'firstName'
		},
		{
			displayText: 'Last Name:',
			value: 'lastName'
		}
	];

	seatingOptions = [
		{
			displayText: 'Outdoors',
			value: 'outdoors'
		},
		{
			displayText: 'Indoors',
			value: 'indoors'
		},
		{
			displayText: 'VIP',
			value: 'vip'
		}
	];

	smokingOptions = [
		{
			displayText: 'Choose an option',
			value: ''
		},
		{
			displayText: 'Smoking',
			value: 'smoking'
		},
		{
			displayText: 'Non-smoking',
			value: 'non-smoking'
		}
	];

	appetizerOptions = [
		{
			displayText: 'Raw Fish',
			value: 'raw-fish'
		},
		{
			displayText: 'Salad',
			value: 'salad'
		},
		{
			displayText: 'Fried Cuttlefish',
			value: 'fried-cuttlefish'
		},
		{
			displayText: 'Peanuts',
			value: 'peanuts'
		}
	];

	// State variables
	state = {
		firstName: '',
		lastName: '',
		seating: '',
		smoking: '',
		appetizers: []
	};

	// Functions
	renderTextInputs() {
		return this.textInputFields.map((textInputField, index) => {
			return (
				<React.Fragment key={index}>
					<label className='form-label'>
						{textInputField.displayText}
					</label>

					<input
						type='text'
						name={textInputField.value}
						className='form-control'
						value={this.state[textInputField.value]}
						onChange={this.updateFormField}
					/>
				</React.Fragment>
			);
		});
	}

	renderRadioInputs(radioName, options) {
		return options.map((option, index) => {
			return (
				<React.Fragment key={index}>
					<input
						type='radio'
						name={radioName}
						id={option.value}
						className='form-check-input'
						value={option.value}
						onChange={this.updateFormField}
						checked={this.state[radioName] === option.value}
					/>

					<label htmlFor={option.value} className='form-check-label'>
						{option.displayText}
					</label>
				</React.Fragment>
			);
		});
	}

	renderSelectDropdowns(selectName, options) {
		let optionElements = options.map((option, index) => {
			return (
				<React.Fragment key={index}>
					<option value={option.value} disabled={option.value === ''}>
						{option.displayText}
					</option>
				</React.Fragment>
			);
		});

		return (
			<select
				name={selectName}
				className='form-select'
				value={this.state[selectName]}
				onChange={this.updateFormField}
			>
				{optionElements}
			</select>
		);
	}

	renderCheckboxes(checkboxName, options) {
		return options.map((option, index) => {
			return (
				<React.Fragment key={index}>
					<input
						type='checkbox'
						name={checkboxName}
						id={option.value}
						className='form-check-input'
						value={option.value}
						onChange={this.updateFormField}
						checked={this.state[checkboxName].includes(option.value)}
					/>

					<label htmlFor={option.value} className="form-check-label">{option.displayText}</label>
				</React.Fragment>
			);
		});
	}

	// Event Handlers
	updateFormField = (event) => {
		if (event.target.type !== 'checkbox') {
			this.setState({
				[event.target.name]: event.target.value
			});
		} else {
			// Uncheck checkbox if it is already checked
			if (this.state[event.target.name].includes(event.target.value)) {
				this.setState({
					[event.target.name]: this.state[event.target.name].filter(
						(element) => element !== event.target.value
					)
				});
			}
			// Check checkbox if it is not already checked
			else {
				this.setState({
					[event.target.name]: [
						...this.state[event.target.name],
						event.target.value
					]
				});
			}
		}
	};

	render() {
		return (
			<div>
				{/* Text Inputs */}
				{/* <div className='mt-2'>
					<label className='form-label'>First Name:</label>
					<input
						type='text'
						name='firstName'
						className='form-control'
						value={this.state.firstName}
						onChange={this.updateFormField}
					/>
				</div> */}
				<div className='mt-2'>{this.renderTextInputs()}</div>

				{/* Radio Inputs */}
				<div className='mt-2'>
					<label className='form-label'>Seating:</label>

					{/* <input type="radio" name="seating" className="form-check-input" id="outdoors" value="outdoors" onChange={this.updateFormField} checked={this.state.seating === 'outdoors'}/>
					<label htmlFor="outdoors" className="form-check-label">Outdoors</label>

					<input type="radio" name="seating" className="form-check-input" id="indoors" value="indoors" onChange={this.updateFormField} checked={this.state.seating === 'indoors'}/>
					<label htmlFor="indoors" className="form-check-label">Indoors</label> */}

					{this.renderRadioInputs('seating', this.seatingOptions)}
				</div>

				{/* Select dropdown */}
				<div className='mt-2'>
					<label className='form-label'>Smoking area:</label>

					{/* <select name="smoking" className="form-select" value={this.state.smoking} onChange={this.updateFormField}>
						<option value="" disabled>Choose an option</option>
						<option value="smoking">Smoking</option>
						<option value="non-smoking">Non-smoking</option>
					</select> */}

					{this.renderSelectDropdowns('smoking', this.smokingOptions)}
				</div>

				{/* Checkboxes */}
				<div className='mt-2'>
					<label className='form-label'>Appetizer(s):</label>

					{/* <input type="checkbox" name="appetizers" className="form-check-input" id="raw-fish" value="raw-fish" onChange={this.updateFormField} checked={this.state.appetizers.includes('raw-fish')} />
					<label htmlFor="raw-fish" className="form-check-label">Raw Fish</label> */}

					{this.renderCheckboxes('appetizers', this.appetizerOptions)}
				</div>
			</div>
		);
	}
}
