import React from 'react';

export default function Listing(props) {
	return (
		<React.Fragment>
			<h1 className='mt-2'>Recipes</h1>
			{props.data.map((recipe) => (
				<React.Fragment key={recipe._id}>
					<div className='card p-2 my-1'>
						<h3 className='title'>{recipe.title}</h3>
						<h4>Ingredients</h4>
						<ul>
							{recipe.ingredients.map((ingredient) => (
								<li key={ingredient}>{ingredient}</li>
							))}
						</ul>
					</div>
				</React.Fragment>
			))}
		</React.Fragment>
	);
}
