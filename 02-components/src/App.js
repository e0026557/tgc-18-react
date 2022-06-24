import React from 'react';
// Hands on 2.4
// Best to have each component in its own file since they have the potential to be very big
import Alert from './Alert.js';
import PuppyImage from './PuppyImage.js';
import BorderedImageFrame from './BorderedImageFrame.js';
import SumOfTwo from './SumOfTwo.js';

// Note: Even if there is one function to import, it must be inside curly braces {}
import {sayHello, sayGoodbye} from "./functions.js";
import ClickCount from './ClickCount.js';

// function sayHello() {
//   return 'hello';
// }

// function sayGoodbye() {
//   // Under the hood, JSX are just JavaScript objects
//   // -> therefore they can be assigned to variables
//   let g = <p>Goodbye world</p>;
//   return g;
// }

// A component is:
// 1. a function
// 2. returns JSX
// 3. its first alphabet is UPPERCASE
// 4. can be used in JSX as if it is a HTML element

// The first argument of a Component function is all its props in an object
// props is an object

// function Alert(props) {
//   // for Alert, the 'message' props will be error message to display
//   return (<div style={{
//     'backgroundColor': props.bgColor
//   }}>{props.message}</div>)
// }

// function PuppyImage() {
//   return <img src={require ('./puppy.jpg')} />;
// }

// Hands on 2.1
// function BorderedImageFrame() {
//   // Border: red in color, thickness 4px and using solid lines
//   let img = <img style={{
//     'border': '4px solid red'
//   }} src={require('./dog.jpg')} />;
//   return img;
// }

// Hands on 2.2
// function BorderedImageFrame(props) {
//   // Border: red in color, thickness 4px and using solid lines
//   let img = <img style={{
//     'border': '4px solid red'
//   }} src={props.imgSrc} />;

//   // let img = <img style={{
//   //   'border': '4px solid red'
//   // }} src={require('/' + props.imgSrc)} />;
//   return img;
// }

// Hands on 2.3
// function SumOfTwo(props) {
//   // return <p>{Number(props.num1) + Number(props.num2)}</p>;
//   return <p>{props.num1 + props.num2}</p>;
// }

// App is also a component
export default function App() {
  return (
    <React.Fragment>
      <h1>hello world</h1>
      {/* We can call a function between the {} */}
      {/* The result of the function can be rendered out */}
      {sayHello()}
      {sayGoodbye()}
      {/* Create an render an instance of the Alert component */}
      <Alert bgColor="red" message="hello world" />
      <Alert bgColor="indigo" message="collision detected"/>
      <PuppyImage />
      {/* require must be outside for React to work */}
      <BorderedImageFrame imgSrc={require ('./dog.jpg')} />
      <SumOfTwo num1={10} num2={Math.floor(20.2)} />
      <ClickCount/>
    </React.Fragment>
  );
}

// Alternatively:
// export default App; // CommonJS: module.exports = App;