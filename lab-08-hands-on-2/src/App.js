import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetTracker from './BudgetTracker';

function App() {
	return (
		<React.Fragment>
			<div className='container'>
				<BudgetTracker />
			</div>
		</React.Fragment>
	);
}

export default App;
