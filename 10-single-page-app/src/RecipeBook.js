import React from 'react';
import AddNew from './pages/AddNew';
import Listing from './pages/Listing';

export default class RecipeBook extends React.Component {
	state = {
		active: 'listing', // The 'active' variable in the state determines which page to show
		data: [
			{
				_id: 1,
				title: 'Chicken Rice',
				ingredients: ['chicken broth', 'chicken', 'rice']
			},
			{
				_id: 2,
				title: 'Duck Rice',
				ingredients: ['duck', 'rice']
			}
		],
		newTitle: '',
		newIngredients: ''
	};

	processAddNew = () => {
		const newRecipe = {
			_id: Math.floor(Math.random() * 999999 + 100000),
			title: this.state.newTitle,
			ingredients: this.state.newIngredients.split(',')
		};

		this.setState({
			data: [...this.state.data, newRecipe],
            active: 'listing' // To switch to recipe page after adding new recipe
		});
	};

	renderContent() {
		if (this.state.active === 'listing') {
			return <Listing data={this.state.data} />;
		} else if (this.state.active === 'add-new') {
			return (
				<AddNew
					newTitle={this.state.newTitle}
					newIngredients={this.state.newIngredients}
					updateFormField={(key, value) => {
						this.setState({
							[key]: value
						});
					}}
					addNew={this.processAddNew}
				/>
			);
		}
	}

	changePage(page) {
		this.setState({
			active: page
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className='container'>
					<ul className='nav nav-tabs'>
						<li className='nav-item'>
							<button
								className={
									'nav-link ' +
									(this.state.active === 'listing'
										? 'active'
										: '')
								}
								aria-current='page'
								onClick={() => {
									this.changePage('listing');
								}}
							>
								Recipes
							</button>
						</li>
						<li className='nav-item'>
							<button
								className={
									'nav-link ' +
									(this.state.active === 'add-new'
										? 'active'
										: '')
								}
								aria-current='page'
								onClick={() => {
									this.changePage('add-new');
								}}
							>
								Add New
							</button>
						</li>
					</ul>
					{this.renderContent()}
				</div>
			</React.Fragment>
		);
	}
}
