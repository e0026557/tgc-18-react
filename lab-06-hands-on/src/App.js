import React from 'react';
import RestaurantForm from "./RestaurantForm";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Restaurant Booking Form</h1>
        <RestaurantForm />
      </div>
    </React.Fragment>
  );
}

