import React from 'react';

export default function EditTask(props) {
	return (
		<React.Fragment>
			<li className='list-group-item'>
				<input
					type='text'
					className='form-control'
					name='modifiedTaskDescription'
					value={props.modifiedTaskDescription}
					onChange={props.updateFormField}
				/>
				<button
					className='mt-3 btn btn-primary btn-sm'
					onClick={props.processUpdate}
				>
					Update
				</button>
			</li>
		</React.Fragment>
	);
}
