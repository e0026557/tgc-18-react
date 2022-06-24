import React from 'react'; // -> equivalence in common JS : const React = require('react');
import logo from './logo.svg';
import './style.css';
 

// Create a React component
// -> a React component must always return JSX
// NOTE: Only ONE parent is allowed (Use React.Fragment)
// App.js is the entry point to all React application
function App() {
  return (
    <React.Fragment>
      <h1 style={{color:"green", backgroundColor: "pink"}}>Hello world</h1> 
      <p className='urgent'>hello there</p>
      <img src={logo} />
      <img src={require('./image.jpg')} />
    </React.Fragment>
  )
}


// Export out the component
export default App; // -> equivalent to module.exports = App;


