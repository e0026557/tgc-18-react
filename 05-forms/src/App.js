import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SurveyForm from './SurveyForm';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <h1>Survey</h1>
        <SurveyForm/>
      </div>
    </React.Fragment>
  );
}

export default App;
