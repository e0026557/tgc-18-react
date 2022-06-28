import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsForm from './ContactUsForm';

function App() {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <h1>Contact Us</h1>
        <ContactUsForm />
      </div>
    </React.Fragment>
  );
}

export default App;
