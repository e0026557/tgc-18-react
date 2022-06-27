// We use 'import from' instead of 'require' -> ES6 method
import logo from './logo.svg';
import './App.css';
import MyImage from './components/MyImage.js';

// Functions
function foobar() {
  let x = Math.floor(Math.random() * 6 + 1);
  if (x > 3) {
    return 'high';
  }
  else {
    return 'low';
  }
}

// Components
// 1. function
// 2. First char must be uppercase
// 3. returns JSX

// function MyImage(props) {
//   return (
//     <img src={require("./puppy.jpg")} 
//     alt="Some picture"
//     style={
//       {
//         'borderWidth': '1px',
//         'borderStyle': 'solid',
//         'borderColor': props.borderColor
//       }
//     } />
//   )
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello world
        {/* We can call functions within JSX */}
        {/* -> the function MUST return a value */}
        {foobar()}

        {/* Create an instance of a component */}
        <MyImage />
        <MyImage borderColor="pink"/>
      </header>
    </div>
  );
}

export default App;
