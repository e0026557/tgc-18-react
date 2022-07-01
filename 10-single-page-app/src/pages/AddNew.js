import React from 'react';

export default function AddNew(props) {
	return (
		<React.Fragment>
			<h1>Add New</h1>
			<div>
				<label>Title</label>
				<input
					type='text'
                    className='form-control'
					value={props.newTitle}
					onChange={(event) => {
						props.updateFormField('newTitle', event.target.value);
					}}
				/>
			</div>
			<div>
				<label>Ingredients</label>
				<input
					type='text'
                    className='form-control'
					value={props.newIngredients}
					onChange={(event) => {
						props.updateFormField(
							'newIngredients',
							event.target.value
						);
					}}
				/>
			</div>
            <button className="btn btn-primary mt-3" onClick={props.addNew}>Add</button>
		</React.Fragment>
	);
}
